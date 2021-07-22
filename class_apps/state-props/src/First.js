import React, {useState} from 'react'
import Second from './Second'
const obj = {
    products:[
        {"p_id":111,"p_name":"p_1","p_cost":10000},
        {"p_id":222,"p_name":"p_2","p_cost":20000},
        {"p_id":333,"p_name":"p_3","p_cost":30000},
        {"p_id":444,"p_name":"p_4","p_cost":40000},
        {"p_id":555,"p_name":"p_5","p_cost":50000},
    ]
};
export default function First() {
    const [data,setData] = useState(obj);
  return (
    <div>
      <Second key1={data.products} />
    </div>
  )
}

