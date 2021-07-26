import { Grid } from "@material-ui/core";
import React from "react";
import Input from '../../Controls/Input';
import Controls from '../../Controls/Controls';
import Form from "../../Form";
import useForm from "../../useForm";
const initialFValue:any={
    fullName : "",
    id:0,
    email : "",
    city :""
}

export default function EmployeeForm():any{
    const validate:any=(fieldValues=values)=>{
        const temp:any = {...errors};
        if("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName?"":"fullName is Required";
        if("id" in fieldValues)
            temp.id = fieldValues.id?"":"Id is Required";
        if("email" in fieldValues)
            temp.email = fieldValues.email?"":"email is Required";
        if("city" in fieldValues)
            temp.city = fieldValues.city?"":"city is Required";
        setErrors({...temp});

    }
    const {values,setValues,errors,setErrors,handleInputChange,resetForm} = useForm(initialFValue,true,validate);
    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                    name="Id"
                    label="Id"
                    value={values.id}
                    error={errors.id}
                    onChange={handleInputChange}

                    />
                    <Controls.Input 
                    name="fullName"
                    label="full Name"
                    value={values.fullName}
                    error={errors.fullName}
                    onChange={handleInputChange}

                    />
                    <Controls.Input 
                    name="email"
                    label="Email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleInputChange}

                    />
                    <Controls.Input 
                    name="city"
                    label="City"
                    value={values.city}
                    error={errors.city}
                    onChange={handleInputChange}

                    />
                    <Controls.Input 
                    name="Id"
                    label="Id"
                    value={values.id}
                    error={errors.id}
                    onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>

        </Form>
    );
}

