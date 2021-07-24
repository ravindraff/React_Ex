import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import {  MailOutlined, NotificationsOff } from "@material-ui/icons";
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import React from "react";
function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase />
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