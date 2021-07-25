import React, { useState } from "react";
export default function UseForm(initialFValue: any,validateonChange:boolean,validate){
    const [values,setValues] =useState(initialFValue);
    const [errors,setErrors] =useState({});
    const handleInputChange:any = (event:any)=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
        if(validateonChange){
            validate({[name]:value})
        }
    }
    const resetForm=(event:any)=>{
        setValues(initialFValue),
        setErrors({});
    }
}