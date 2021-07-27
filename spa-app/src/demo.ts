//Import All Modules
import * as express from 'express';
import * as mongodb from 'mongodb';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
//Create the rest Object 
let app:any = express();
//Enable the cors policy
app.use(cors());
//Set the JSON as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//Create the Client
let mClient:any = mongodb.MongoClient;
//Create the rest api
app.post('/login',(req:any, res:any) =>{
    mClient.connet("mongodb+srv://admin:admin@mycluster.zvdho.mongodb.net/project-db?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db= connection.db('project-db');
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd}).toArray((err:any,result:any):any=>{
                if(err) throw err;
                else{
                    if(result.length>0){
                        res.status(200).json({login:"login success"});
                    }else{
                        res.status(200).json({login:"login failed"});
                    }

                }
            });
        }
    })

})
//Assign the Port Number
app.listen(8080);
console.log("server started successfully on port no 8080");
