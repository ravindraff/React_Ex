import React from 'react'
import Paper from '@material-ui/core/Paper'
import {TableContainer, Table, TableRow,TableHead, TableBody,TableCell,withStyles,makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    root: {
        margin : theme.spacing(5),
        padding : theme.spacing(2)
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

export default function Second(props) {
    const classes = useStyles();
    const {key1} = props;
  return (
    <React.Fragment>
        <Paper className={classes.root}>
            <TableContainer>
                <Table>
                    <StyledTableRow>
                        <TableHead>
                            <StyledTableCell>SNO</StyledTableCell>
                            <StyledTableCell>PID</StyledTableCell>
                            <StyledTableCell>PName</StyledTableCell>
                            <StyledTableCell>PCost</StyledTableCell>
                        </TableHead>
                    </StyledTableRow>
                    {key1.map((element,index)=>(
                        <StyledTableRow>
                            <TableBody>
                                <StyledTableCell>{index+1}</StyledTableCell>
                                <StyledTableCell>{element.p_id}</StyledTableCell>
                                <StyledTableCell>{element.p_name}</StyledTableCell>
                                <StyledTableCell>{element.p_cost}</StyledTableCell>
                                
                            </TableBody>
                    </StyledTableRow>
                    ))}
                </Table>          
            </TableContainer>

        </Paper>

      
    </React.Fragment>
  )
}
