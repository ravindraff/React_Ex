"use strict";
exports.__esModule = true;
//Import All Modules
var express = require("express");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var cors = require("cors");
//Create the rest Object 
var app = express();
//Enable the cors policy
app.use(cors());
//Set the JSON as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//Create the Client
var mClient = mongodb.MongoClient;
//Create the rest api
app.post('/login', function (req, res) {
    mClient.connet("mongodb+srv://admin:admin@mycluster.zvdho.mongodb.net/project-db?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db('project-db');
            db.collection("login_details").find({ "uname": req.body.uname, "upwd": req.body.upwd }).toArray(function (err, result) {
                if (err)
                    throw err;
                else {
                    if (result.length > 0) {
                        res.status(200).json({ login: "login success" });
                    }
                    else {
                        res.status(200).json({ login: "login failed" });
                    }
                }
            });
        }
    });
});
//Assign the Port Number
app.listen(8080);
console.log("server started successfully on port no 8080");
