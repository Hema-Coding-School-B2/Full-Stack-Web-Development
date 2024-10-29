import React from 'react'
import C  from './C.js'
const B = (props) => {
    console.log(props.dataA)
    console.log(props.dataA.name)
  return (
    <div>
    <h2>B Component : {props.dataA.name}</h2>
    <C dataB={props.dataA}/>
    {/* <C dataB={props}/> */}

    </div>
  )
}

export default B