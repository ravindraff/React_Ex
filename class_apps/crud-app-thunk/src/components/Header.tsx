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