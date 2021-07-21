import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    c1:{backgroundColor:"green"},
    c2:{backgroundColor:"pink"}
});


function State1(){
    const [p_id,setPid] = useState(111);
    const [p_name,setPName] = useState("p_one");
    const [p_cost,setPCost] = useState(10000);
    const classes = useStyles();
    function myFun(){
        setPid(11);
        setPName("prod_1");
        setPCost(12000);
    }
    return(<React.Fragment>
        <TableContainer>
            <Table>
                <TableHead className={classes.c1}>
                    <TableRow>
                        <TableCell><Typography variant="h6" color="primary">PID</Typography></TableCell>
                        <TableCell><Typography variant="h6" color="primary">PName</Typography></TableCell>
                        <TableCell><Typography variant="h6" color="primary">PCost</Typography></TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody className = {classes.c2}>
                <TableRow>
                        <TableCell><Typography variant="subtitle2" color="secondary">{p_id}</Typography></TableCell>
                        <TableCell><Typography variant="subtitle2" color="secondary">{p_name}</Typography></TableCell>
                        <TableCell><Typography variant="subtitle2" color="secondary">{p_cost}</Typography></TableCell>
                    </TableRow>
                </TableBody>

                
            </Table>
        </TableContainer>
        <br></br>

        <Button variant="contained" color="primary" onClick={myFun}>Change</Button>
    </React.Fragment>)
}
export default State1;