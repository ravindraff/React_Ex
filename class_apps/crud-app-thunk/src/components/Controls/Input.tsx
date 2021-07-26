import  React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props:any):any {
    const {name,label,value,error=null,onChange} = props;
    return(
        <TextField variant="outlined"
                    name={name} 
                    value ={value}
                    label={label}
                    onChange={onChange}
                    {...(error && {error:true,helperText:error})}                />
    );
}