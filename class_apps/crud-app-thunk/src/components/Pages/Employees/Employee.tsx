import { makeStyles, Paper } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import React from "react";
import PageHeader from "../../PageHeader";
import EmployeeForm from "./EmployeeForm";
const useStyles = makeStyles((theme) => ({
  PageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
export default function Employee() {
  const classes = useStyles();
  return (
      <React.Fragment>
           <PageHeader
        title="Employee Management System"
        subtitle="Add Employee"
        icon={<GroupAddIcon />}
            />
            <Paper elevation={3} square className={classes.PageContent}>
                <EmployeeForm />
            </Paper>
      </React.Fragment>
   
    
  );
}
