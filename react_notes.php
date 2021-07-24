download and install npm
===========================
npm is node pakaging manager

after that install npm

install yarn tool
=====================
npm install -g yarn@latest



create-react-app tool using create react projects
npm install -g create-react-app

=============================================

create folder
switch to created folder
>cd folder name
>create-react-app first-app
switch to folder
>cd first-app
start the project 
>npm start/yarn start

Git Commit:
===================
echo "# ReactPractices" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ravindraff/ReactPractices.git
https://github.com/ravindraff/React_Ex.git
git push -u origin main

yarn add @material-ui/core @material-ui/icons --save
lazy load:
yarn add react-lazy-load-image-component --save

Create Lazy load App:
===================
>create-react-app get-app --template typescript
>yarn add @material-ui/core @material-ui/icons --save
>yarn add axios --save
https://morioh.com/p/a9ec38a35c23
>yarn add @types/react-lazy-load-image-component --save
>yarn add react-lazy-load-image-component --save

axios:
    ===========
    assyncCall:
    ===================
    import React from 'react';
    import axios from 'axios';
    import urlName from './config';

    function assyncCall():any{
        return axios.get(urlName)
    }
    export default assyncCall;

urlName:
    ===========
    config.tsx:
    =========
    const urlName: string = "https://restcountries.eu/rest/v2/all";
    export default urlName;

Get Countries:
    ===========
    import { TableBody, TableRow } from '@material-ui/core';
    import { TableHead } from '@material-ui/core';
    import { Table, TableContainer ,TableCell, Paper } from '@material-ui/core';

    import React, {useState,useEffect} from 'react';
    import assyncCall from './assyncCall'
    const [countries,getCountries] = useState([]);
    useEffect(()=>{
        assyncCall()
        .then((posRes:any)=>{
           console.log(posRes.data);
            getCountries(posRes.data);
        },(err:any)=>{
            console.log(err);
        })
    },[]);
    useEffect(()=>{
        
    },[]);
    countries.map((element,index)=>(

    ));






Loading indicator:
======================
create-react-app get-app --template typescript
yarn add axios
yarn add @material-ui/core @material-ui/icons --save
https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls
yarn add react-promise-tracker --save
https://morioh.com/p/a9ec38a35c23
npm i --save-dev @types/react-lazy-load-image-component
yarn add react-lazy-load-image-component --save
yarn add @types/react-lazy-load-image-component
yarn add react-loader-spinner --save


mongodb+srv://admin:<password>@cluster0.ary28.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

USER : nodejs_usr
PWD:admin
DATABASE: mern-db
Collection :employees
mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority
to download node modules : 
npm i express mongodb cors body-parser --save


USER : admin
PWD:admin
mongodb+srv://admin:<password>@mycluster.zvdho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


Create Server : 
====================================
>create server folder

>cd server
=>create smaple json file
=>download modules express mongodb cors body-parser
>server>npm i express mongodb cors body-parser --save
>server>yarn add express mongodb cors body-parser --save

=>create server.js file
=>in server.js file import all modules
=================================
let express = require('express');
let mongodb = require('mongodb');
let cors = require('cors');
let bodyParser = require('body-parser');

//create the client
let mclient = mongodb.MongoClient;


//create rest object
let app = express();

//to enable the port communication
app.use(cors());

//MIME type 
app.use(bodyParser.json());

//Read the post data 
app.use(bodyParser.urlencoded:{extended:true})

let password = "admin";
let db_name = "mern-db";
let collection_name = "employees";
let url = 'mongodb+srv://admin:'+password+'@mycluster.zvdho.mongodb.net/'+db_name+'?retryWrites=true&w=majority';


//create the post request object
app.post('',function(req,res){
    mclient.connect(url,(err,client)=>{
        if(err) throw err;
        else
        {
            let db = client.db(db_name);
            db.collection(collection_name).insertOne(obj,(err,result)=>{
                if(err) throw err;
                else {
                    res.send({insert : "success"});
                }
                
            });
        }
    })
})
//Create the get request object
app.get('',function(req,res){
    mclient.connect(url, function (err, connection) {
        if(err) throw err;
        else{
            var db = connection.db(db_name);
            db.collection(collection_name).find().toArray(function (err, array) {});
        } 
    })

})
//Create the update request object
app.put('',function(req,res){
    let obj = {};
    mclient.connect(url,(err,client) => {
        if (err) throw err;
        else{
            let db = client.db(db_name);
            db.collection(collection_name).updateOne({"id":req.body.id},{$set:obj},(err,result) => {
                if (err) throw err;
                else{
                    res.send({update : "success"})
                }
            }
            )
        }
    });
})

//listening for port 
app.listen('port',function(

))



ex:
================================================================

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
let url = 'mongodb+srv://admin:'+password+'@mycluster.zvdho.mongodb.net/'+db_name+'?retryWrites=true&w=majority';
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
        "id":req.body.id,
        "fullName":req.body.fullName,
        "email":req.body.email,
        "mobile":req.body.mobile,
        "departmentId":req.body.departmentId,
        "gender":req.body.gender,
        "hireDate":req.body.hireDate,
    };
    mclient.connect(url,(err,client)=>{
        if(err) throw err;
        else
        {
            let db = client.db(db_name);
            db.collection(collection_name).insertOne(obj,(err,result)=>{
                if(err) throw err;
                else {
                    res.send({insert : "success"});
                }
                
            });
        }
    })

})

//create the update request

app.put('/updateEmployee', function (req, res) {
    let obj = {
        "email":req.body.email,
        "mobile":req.body.mobile,
    };
    mclient.connect(url,(err,client) => {
        if (err) throw err;
        else{
            let db = client.db(db_name);
            db.collection(collection_name).updateOne({"id":req.body.id},{$set:obj},(err,result) => {
                if (err) throw err;
                else{
                    res.send({update : "success"})
                }
            }
            )
        }
    });
})

let port = process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("server started successfully.........");
    console.log(url);
})



//Create State Management
===============================
>yarn add redux --save
