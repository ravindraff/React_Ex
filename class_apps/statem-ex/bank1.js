//1.Import the module redux
let {createStore} = require('redux');
//4.initialize the state values
initialState = {
    bal:10000
}
//3.Create redux with state and action
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal:state.bal - action.value,
            }
            break;
        case "DEPOSIT":
            return{
                ...state,
                bal:state.bal + action.value,
            }
    }
}

//2.Create the store and deploy the reducer
const store = createStore(reducer);
//6.Subscribe 
store.subscribe(()=>{
    console.log(store.getState());
})
//5.dispatch
store.dispatch({type:"WITHDRAW",value:2000});
store.dispatch({type:"DEPOSIT",value:6000});
