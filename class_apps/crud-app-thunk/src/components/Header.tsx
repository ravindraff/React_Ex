import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar ,makeStyles} from "@material-ui/core";
import {  MailOutlined, NotificationsOff } from "@material-ui/icons";
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
const useStyles = makeStyles({
    root:{ 
        background:"white"
    }
})
function Header() {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase placeholder="Search Here" 
                        startAdornment={<SearchIcon />}
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