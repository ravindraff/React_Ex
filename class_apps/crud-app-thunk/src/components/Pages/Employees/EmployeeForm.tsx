import { Grid } from "@material-ui/core";
import React from "react";
import Input from '../../Controls/Input';
import Controls from '../../Controls/Controls';
import Form from "../../Form";
import useForm from "../../useForm";
const initialFValue:any={
    fullName : "",
    id:"",
    email : "",
    city :"",
    mobile : "",
    departmentId:""
}
const genderItems:any=[
    {id: "male",title: "Male"},
    {id: "female",title: "FeMale"},
    {id: "other",title: "Other"},
]
const selectItems:any=[
    {id: "training",title: "Training"},
    {id: "development ",title:"Development"},
    {id: "r&d",title: "R&D"},
    {id: "tester",title: "Testing"},
    {id: "Production",title: "Production"},
]


export default function EmployeeForm():any{
    const validate:any=(fieldValues=values)=>{
        const temp:any = {...errors};
        if("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName?"":"fullName is Required";
        if("id" in fieldValues)
            temp.id = fieldValues.id?"":"Id is Required";
        if("email" in fieldValues)
           /*  temp.email = fieldValues.email?"":"email is Required"; */
           temp.email =(/$^|.+@.+..+/).test(fieldValues.email)?"":"email is invalid";
        if("city" in fieldValues)
            temp.city = fieldValues.city?"":"city is Required";
       
        if("mobile" in fieldValues)
            temp.mobile = fieldValues.mobile.length>9?"":"mobile number is 10 digits mandatory";

        if("departmentId" in fieldValues)
            temp.departmentId = fieldValues.departmentId?"":"department Id is Required";
            
        setErrors({...temp});

    }
    const {values,setValues,errors,setErrors,handleInputChange,resetForm} = useForm(initialFValue,true,validate);
    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    
                    <Controls.Input 
                    name="fullName"
                    label="full Name"
                    value={values.fullName}
                    error={errors.fullName}
                    onChange={handleInputChange}/>
                    <Controls.Input 
                    name="email"
                    label="Email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleInputChange}/>
                    <Controls.Input 
                    name="city"
                    label="City"
                    value={values.city}
                    error={errors.city}
                    onChange={handleInputChange}/>
                    <Controls.Input 
                    name="mobile"
                    label="mobile"
                    value={values.mobile}
                    error={errors.mobile}
                    onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name="gender"
                        label="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select 
                        name="departmentId"
                        label="Department Id"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        error ={errors.departmentId}
                        items={selectItems}
                    />
               
                </Grid>
            </Grid>

        </Form>
    );
}

