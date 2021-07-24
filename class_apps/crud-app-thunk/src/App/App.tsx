import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core';
const useStyles = makeStyles({
  appMain: {
   paddingLeft:"320px",
   width:"100%"
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
      </div>
      </ThemeProvider>  
  );
}

export default App;
