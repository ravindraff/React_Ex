import React from 'react';
import Third from './Third';

function Second(props){
    /* const {key1,key2,key3} = props */
    return(
        <div>
            <Third {...props} />
           {/*  <h1>{key1}</h1>
            <h2>{key2}</h2>
            <h3>{key3}</h3> */}
        </div>
    )

}
export default Second;
