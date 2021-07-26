import React, { useState } from "react";
export default function useForm(initialFValue:any,validateOnChange:boolean=false,validate:any){
    const [values,setValues] = useState(initialFValue);
    const [errors,setErrors] = useState({fullName:"",id:"",email:"",city:"",});
    const handleInputChange:any =(event:any):any=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
        if(validateOnChange){
            validate({ [name]: value})
        }
    }
    const resetForm:any =(event:any):any=>{
        setValues(initialFValue);
        setErrors({fullName:"",id:"",email:"",city:""});
    }
    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
};