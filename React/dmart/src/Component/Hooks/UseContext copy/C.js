import React from 'react'
import D from './D.js'

const C = (props) => {
    console.log("C Component", props)
  return (
    <div>
    <h2>C Component: {props.dataB.age}</h2>
    <D dataC={props.dataB}/>
    </div>
  )
}

export default C