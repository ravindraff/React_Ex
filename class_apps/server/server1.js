//import all modules
//require('');
let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
let mongodb = require('mongodb');

//create a object for rest services
let app = express();
//where app is the rest object
//where app object helps to develop the rest services

//to enable ports communication

app.use(cors());

//JSON as MIME type
app.use(bodyparser.json());

//read the form data 
app.use(bodyparser.urlencoded({
    extended: false
}));


let password = "admin";
let db_name = "mern-db";
let collection_name = "employees";
let url = 'mongodb+srv://admin:' + password + '@mycluster.zvdho.mongodb.net/' + db_name + '?retryWrites=true&w=majority';
//let db_url ='mongodb+srv://admin:'+password+'@cluster0.ary28.mongodb.net/'+db_name+'?retryWrites=true&w=majority';
let mclient = mongodb.MongoClient;

//create the get request
//var url = "mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodejs_db?retryWrites=true&w=majority";
app.get('/getproducts', function (req, res) {
    mclient.connect(url, function (err, connection) {
        if (err) throw err;
        else {
            var db = connection.db(db_name);
            db.collection(collection_name).find().toArray(function (err, array) {
                if (err) throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});

// Create the post request
app.post('/createEmployee', function (req, res) {
    let obj = {
        "id": req.body.id,
        "fullName": req.body.fullName,
        "email": req.body.email,
        "mobile": req.body.mobile,
        "departmentId": req.body.departmentId,
        "gender": req.body.gender,
        "hireDate": req.body.hireDate,
    };
    mclient.connect(url, (err, client) => {
        if (err) throw err;
        else {
            let db = client.db(db_name);
            db.collection(collection_name).insertOne(obj, (err, result) => {
                if (err) throw err;
                else {
                    res.send({
                        insert: "success"
                    });
                }

            });
        }
    })

})

//create the update request

app.put('/updateEmployee', function (req, res) {
    let obj = {
        "email": req.body.email,
        "mobile": req.body.mobile,
    };
    mclient.connect(url, (err, client) => {
        if (err) throw err;
        else {
            let db = client.db(db_name);
            db.collection(collection_name).updateOne({
                "id": req.body.id
            }, {
                $set: obj
            }, (err, result) => {
                if (err) throw err;
                else {
                    res.send({
                        update: "success"
                    })
                }
            })
        }
    });
})

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server started successfully.........");
    console.log(url);
})