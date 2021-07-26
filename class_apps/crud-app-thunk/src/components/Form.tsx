import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "&  .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(2),
    },
  },
}));
export default function Form(props: any): any {
  const classes = useStyles();
  const { children, ...others } = props;
  return (
    <form className={classes.root} {...others} autoComplete="off">
      {props.children}
    </form>
  );
}
