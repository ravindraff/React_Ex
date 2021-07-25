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
=>import createStore function in redux
    const {createStore} = require('redux');
=>create store using createStore()
    const store = createStore();
=>create reducer
    const reducer = (state,action)=>{};
=>deploy reducer
    const store = createStore(reducer);
=>create initialState
    const initialState ={}
=>implement initialState to reducer
    const reducer = (state=initialState,action)=>{};
=>create the dispatcher
    store.dispatch({type:"AGE_UP",value:1})
    store.dispatch({type:"AGE_DOWN",value:1})
=>implement the business logic into reducer
    const reducer=(state=initialState,action)=>{
        switch(action.type){
            case "AGE_UP":
                return{
                    ...state,
                    age:state.age + 1
                }
                break;
            case "AGE_DOWN":
                return{
                    ...state,
                    age:state.age - 1
                }
        }
        return state;
    }
=>create subscribe
    store.subscribe(()=>{
        console.log(store.getState());
    })


Example:
============================================
create-react-app crud-app-thunk --template typescript
cd crud-app-thunk
yarn add @material-ui/core --save
in index.html include this
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
yarn add @material-ui/icons --save
to change main css => font family to 'Roboto',
yarn start

create components folder
=======================
App.tsx:
==========
    import React from 'react';
    import Header from '../components/Header';
    import SideMenu from '../components/SideMenu';
    import PageHeader from '../components/PageHeader';
    import './App.css';
    import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core';
    import GroupAddIcon from '@material-ui/icons/GroupAdd';
    const useStyles = makeStyles({
    appMain: {
    paddingLeft:"320px",
    //width:"100%"
    }
    })
    const customTheme = createMuiTheme({
    palette:{ 
        primary:{
        main : "#FF0000"
        }
    }
    })
    function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={customTheme}>
        <SideMenu />
        <div className={classes.appMain }>
            <Header />
            <PageHeader 
            title="Employee Management System" 
            subtitle='Add Employee' 
            icon={<GroupAddIcon />} />
        </div>

        </ThemeProvider>  
    );
    }

    export default App;

1.Header file
================
    import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar ,makeStyles} from "@material-ui/core";
    import {  MailOutlined, NotificationsOff } from "@material-ui/icons";
    import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
    import SearchIcon from '@material-ui/icons/Search';
    import React from "react";
    const useStyles = makeStyles(theme=>({
        root:{ 
            background:"white",
            transform:"translateZ(0)"
        },
        searchItem: {
            opacity:"0.6",
            padding: `0px ${theme.spacing(1)}px`,
            fontSize:"0.8rem",
            width:"300px",
            border: "1px solid grey",
            borderRadius:"10px",
            '&:hover':{
                backgroundColor:"#f2f2f2"
            },
            '& .MuiSvgIcon-root':{
                marginRight:theme.spacing(1)
            }

            
        }
    }));
    function Header() {
        const classes = useStyles();
        return(
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item>
                            <InputBase  className={classes.searchItem} placeholder="Search Here" 
                            startAdornment={<SearchIcon fontSize={"small"} />}
                            />
                        </Grid>
                        <Grid item sm={true}>
                        </Grid>
                        <Grid item>
                            <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsOff />
                            </Badge>
                            </IconButton>
                            <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <MailOutlined />
                            </Badge>
                            </IconButton>
                            <IconButton>
                            <Badge color="secondary">
                                <SettingsPowerIcon />
                            </Badge>
                            </IconButton>

                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
    export default Header;
2.Page header file
===========================
    import React from "react";
    import {makeStyles, Paper, Card, Typography} from '@material-ui/core';
    const useStyles = makeStyles(theme=>({
        root: {
            backgroundColor:"#fdfdff",
            
        },
        PageHeader: {
            padding:theme.spacing(4),
            display: "flex",
            marginBottom:theme.spacing(2)
        },
        PageIcon: {
            display:'inline-block',
            padding:theme.spacing(2)
        },
        PageTitle: {
            paddingLeft:theme.spacing(2),
            '& .MuiTypography-subtitle2':{
                opacity:'0.6',
                marginTop:theme.spacing(1)
            }

        }
    }))
    function PageHeader(props:any){
        const classes = useStyles();
        const {title,subtitle,icon} = props
        return(
            <div>
                <Paper elevation={0} className={classes.root}>
                    <div className={classes.PageHeader}>
                        <Card className={classes.PageIcon}>
                            {icon}
                        </Card>
                        <div className={classes.PageTitle}>
                            <Typography variant="h6" component="div">{title}</Typography>
                            <Typography variant="subtitle2" component="div">{subtitle}</Typography>
                        </div>
                    </div>
                </Paper>
            </div>
        )
        
    }
    export default PageHeader;
3.Side Menu file
======================================
    import React from "react";
    import { makeStyles } from '@material-ui/core';
    const useStyles = makeStyles({
        SideMenu:{ 
            display:"flex",
            flexDirection:"column",
            width:"320px",
            height:"100%",
            position:"absolute",
            left:"0px",
            //backgroundColor:"linear-gradient(#e66465, #9198e5)",
            background: 'linear-gradient(to right bottom, #430089, #82ffa1)',

        }
    })

    function SideMenu() {
        const classes = useStyles();
        return(
            <div className={classes.SideMenu}>
            </div>
        )
    }
    export default SideMenu;

yarn add axios @types/axios --save
yarn add redux @types/redux --save
yarn add redux-thunk @types/redux-thunk --save
yarn add axios @types/axios redux @types/redux redux-thunk @types/redux-thunk --save


