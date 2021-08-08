import React from 'react'
import Square from './Square'

export default function Board(props) {
  return (<div>
    <div>
        <Square value={props.square[0]} onClick={()=>{props.onClick(0)}} />
        <Square value={props.square[1]} onClick={()=>{props.onClick(1)}} />
        <Square value={props.square[2]} onClick={()=>{props.onClick(2)}} />
    </div>
    <div>
        <Square value={props.square[0]} onClick={()=>{props.onClick(0)}} />
        <Square value={props.square[1]} onClick={()=>{props.onClick(1)}} />
        <Square value={props.square[2]} onClick={()=>{props.onClick(2)}} />
    </div>
    <div>
        <Square value={props.square[0]} onClick={()=>{props.onClick(0)}} />
        <Square value={props.square[1]} onClick={()=>{props.onClick(1)}} />
        <Square value={props.square[2]} onClick={()=>{props.onClick(2)}} />
    </div>
</div>);
}
