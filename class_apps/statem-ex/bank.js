//store
//reducer
//state
//initial state
//dispatch
//subscribe
//action
//payload

//import createStore function from redux.
//CreateStore function is used to create the store

let {createStore} = require('redux');

//reducer
//business logic called as reducer
//we must deploy reducer to store 

const initialState = {
    bal:10000
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal - action.value
            }
            break;
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal + action.value
            }
 
    }
    return state
}
const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({type:"WITHDRAW",value:2000});
store.dispatch({type:"DEPOSIT",value:5000});