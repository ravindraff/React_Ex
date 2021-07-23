import { TableBody, TableRow } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { Table, TableContainer ,TableCell, Paper } from '@material-ui/core';

import React, {useState,useEffect} from 'react';
import assyncCall from './assyncCall'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GetCountries(){
    const [countries,getCountries] = useState([]);
    useEffect(()=>{
        assyncCall()
        .then((posRes:any)=>{
           console.log(posRes.data);
            getCountries(posRes.data);
        },(err:any)=>{
            console.log(err);
        })
    },[]);
    return(
        <React.Fragment>
            <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>SNO</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>NativeName</TableCell>
                            <TableCell>Capital</TableCell>
                            <TableCell>Population</TableCell>
                            <TableCell>Flag</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.map((element:any, index)=>(
                        <TableRow>
                              <TableCell>{index+1}</TableCell>
                              <TableCell>{element.name}</TableCell>
                              <TableCell>{element.nativeName}</TableCell>
                              <TableCell>{element.capital}</TableCell>
                              <TableCell>{element.population}</TableCell>
                              <TableCell>
                                  <LazyLoadImage src={element.flag}
                                                 width="100"
                                                 height="50"
                                                 effect="blur"
                                  ></LazyLoadImage>
                              </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            </Paper>
        </React.Fragment>
    )
}
export default GetCountries;