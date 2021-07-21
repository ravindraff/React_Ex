import React from 'react'
function Third(props){
    const {key1, key2, key3} = props;
    return(
        <div>
             <h1>{key1}</h1>
            <h2>{key2}</h2>
            <h3>{key3}</h3>
        </div>
    )
}
export default Third;

 