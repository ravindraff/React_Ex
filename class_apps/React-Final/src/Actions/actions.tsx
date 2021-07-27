import axios from 'axios';

/*------------------------------FETCH-----------------------------------*/
export const getEmployees =()=>{
    return (dispatch:any) =>{
        return axios.get("http://localhost:8080/getEmployees").then((posData:any)=>{
            dispatch(employees(posData.data));
        },(errRes:any)=>{
            console.log(errRes);
        })
    }
}
export const employees =(records:any)=>{
    return {type:"FETCH",value:records}
}
/*----------------------------------------------------------------------*/
/*------------------------------ADD-------------------------------------*/
export const addEmployee=(employee:any)=>{
    return (dispatch:any)=>{
        return axios.post("http://localhost:8080/createEmployee", employee).then((posData:any)=>{
            posData.data.createEmployee = employee;
            dispatch(addemp(posData));
        },(err:any)=>{
            console.log(err);
        })
    }
}
export const addemp = (result:any) =>{
    return {type:"ADD",value:result};
}
/*-----------------------------END--------------------------------------*/
/*-----------------------------Edit-------------------------------------*/
export const updateEmployee=(employee:any)=>{
    return (dispatch:any)=>{
        return axios.put("http://localhost:8080/updateEmployee", employee).then((posData:any)=>{
            posData.data.createEmployee = employee;
            dispatch(updateemp(posData));
        },(err:any)=>{
            console.log(err);
        })
    }
}
export const updateemp = (result:any) =>{
    return {type:"EDIT",value:result};
}
/*------------------------------END-------------------------------------*/
/*-----------------------------DELETE-------------------------------------*/
export const deleteEmployee=(employee:any)=>{
    return (dispatch:any)=>{
        return axios.delete("http://localhost:8080/deleteEmployee", {data: employee}).then((posData:any)=>{
            posData.data.createEmployee = employee;
            dispatch(delemp(posData));
        },(err:any)=>{
            console.log(err);
        })
    }
}
export const delemp = (result:any) =>{
    return {type:"DELETE",value:result};
}
/*------------------------------END-------------------------------------*/
