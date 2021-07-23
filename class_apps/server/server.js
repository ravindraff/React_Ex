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
let db_name = "mer-db";
let collection_name = "employees";
let db_url ='mongodb+srv://admin:${password}@cluster0.ary28.mongodb.net/${db_name}?retryWrites=true&w=majority';
let mclient = mongodb.MongoClient;

//create the get request
app.get('/employees',(req, res) => {    
    mclient.connect(db_url,(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db(db_name);
            db.collection(collection_name).find().toArray((err,data)=>{
                if(err) throw err;
                else{
                    res.send(data);
                }

            })
        }

    });

});

let port = process.env.PORT || 8090 ;
app.listen(port,()=>{
    console.log("server started successfully.........");
})