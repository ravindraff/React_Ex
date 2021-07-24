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