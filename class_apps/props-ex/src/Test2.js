import React from 'react'

function Test2(props) {
    const {
        key1,
        key2
    } = props;

    return ( 
    <React.Fragment> {
            key1.map((element, index) => ( <
                p > {
                    element
                } < /p>
                
            ))
            
            
        } 
        {JSON.stringify(key2)}
        </React.Fragment>
    )
}

export default Test2;