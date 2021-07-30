import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {Link,Route,BrowserRouter as Router} from "react-router-dom";
import Employees from '../../src/pages/Employees/Employees';
import Products from '../../src/pages/Products/Products';
// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
        color:"white"
        
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <Router>
                <List disablePadding dense>
                <ListItem button>
                    <ListItemText><Link to='/' >Home</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to='/products'>Products</Link></ListItemText>
                </ListItem>
                </List>
                <Route path="/"><Employees /></Route>
                <Route exact path="/products"><Products/></Route>
            </Router>
        </div>
    )
}

export default withStyles(style)(SideMenu);
