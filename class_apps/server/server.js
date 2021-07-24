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
app.use(bodyparser.urlencoded({ extended :false }));


let password = "admin";
let db_name = "mern-db";
let collection_name = "employees";
let db_url ='mongodb+srv://admin:'+password+'@cluster0.ary28.mongodb.net/'+db_name+'?retryWrites=true&w=majority';
let mclient = mongodb.MongoClient;

//create the get request
var url = "mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodejs_db?retryWrites=true&w=majority";
app.get('/getproducts', function (req, res) {
    mclient.connect(url, function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("nodejs_db");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});

let port = process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("server started successfully.........");
    console.log(db_url);
})