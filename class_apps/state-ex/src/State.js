import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

function State(){
    const [sub,setSub] = useState("ReactJs");
    return(<React.Fragment>
        <Typography variant="h1" color="primary">{sub}</Typography>
        <Button variant="contained" color="secondary" onClick={()=>setSub("React Native")}>Set Sub</Button>
    </React.Fragment>)
}
export default State;