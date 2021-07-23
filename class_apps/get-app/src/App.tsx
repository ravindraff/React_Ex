import React,{useState,useEffect} from 'react';
import axios from 'axios';
import baseUrl from './baseUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoadingSpinner } from 'react-loader-spinner';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
function App() {
  const [data,getData] = useState([]);
  useEffect(()=>{
    axios.get(baseUrl).then((posRes:any)=>{
      getData(posRes.data);
    },(errRes:any)=>{
      console.log(errRes);
    })
  },[]) 
  return(
    
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Native Name</TableCell>
                <TableCell>Capital</TableCell>
                <TableCell>Population</TableCell>
                <TableCell>Flag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
            data.map((element:any,index)=>(
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
                                 effect="black-and-white"
                                                    />
                </TableCell>
               </TableRow>
            ))
            }
            </TableBody>
          </Table>
        </TableContainer>
  )
}
export default App;