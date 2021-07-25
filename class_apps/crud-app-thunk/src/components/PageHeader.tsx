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