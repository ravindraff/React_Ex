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

