const initialState:any = {
    records: []
}
const reducer:any =(state=initialState,actions:any)=>{
    switch(actions.type){
        case "FETCH":
            return{
                ...state,
                records :state.records.concat(actions.value)
            }
            break;
        case "ADD":
        case "EDIT":
        case "DELETE":
            return{
                ...state,
                status:actions.value
            }
    }
}
export default reducer;