import React from 'react'
import Test2 from './Test2';
const arr = ["Angular","ReactJs","VueJs"]
const obj = {key1:"Angular",key2:"ReactJs",key3:"VueJs"}
function Test1() {
    return(
        <React.Fragment>
            <Test2 key1={arr} key2={obj} /> 
        </React.Fragment>
    )
}

export default Test1;