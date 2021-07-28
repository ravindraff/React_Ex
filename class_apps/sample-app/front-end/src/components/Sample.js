import React,{useState,useEffect} from 'react'
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
/* import Popup from "../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../components/Notification";
import ConfirmDialog from "../components/ConfirmDialog"; */

import axios from 'axios';
function Sample() {
    const[records,setRecords] = useState([]);
    useEffect(() => {
      getData();
    }, [])
    async function getData(){
        let result = await fetch("http://localhost:8080/getEmployees");
        result = await result.json();
        setRecords(result);
    }
  return (
    <div>
        <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile</TableCell>
                  </TableRow>  
              </TableHead>
              
              <TableBody>
                {
                    records.map(item =>
                        (<TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.mobile}</TableCell>
                            
                        </TableRow>)
                    )
                }
              </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default Sample
