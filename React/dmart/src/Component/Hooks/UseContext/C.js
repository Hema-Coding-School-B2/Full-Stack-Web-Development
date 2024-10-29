import React,{useContext} from 'react'
import D from './D.js'
import myContext from './MyContext'

const C = () => {
 let text= useContext(myContext)
console.log(text)
  return (
    <div>
    <h2>C Component:{text.age}</h2>
    <D />
    </div>
  )
}

export default C