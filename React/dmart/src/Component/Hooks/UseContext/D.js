import React,{useContext} from 'react'
import myContent from './MyContext.js'
const D = () => {

   let data=  useContext(myContent)
   console.log(data)
  return (
    <div>
    <h2>D Component: {data.email}</h2>
    </div>
  )
}

export default D