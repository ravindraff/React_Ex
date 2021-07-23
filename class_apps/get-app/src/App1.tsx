import React,{useState,useEffect} from 'react';
import axios from 'axios';
import baseUrl from './baseUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
    <p>{
      data.map((element:any,index)=>(
        <LazyLoadImage src={element.flag}
                       width="100"
                       height="50"
                       effect="blur"
        
        />

        

      ))
    }</p>
  )
}
export default App;