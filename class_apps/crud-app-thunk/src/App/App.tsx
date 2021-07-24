import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  appMain: {
   paddingLeft:"320px",
   width:"100%"
  }
})
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain }>
        <Header />
      </div>
    </React.Fragment>
  );
}

export default App;
