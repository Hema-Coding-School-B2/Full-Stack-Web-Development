import React from 'react'
import '../../styles.css'
import B from './B.js';
const A = () => {

    let studentData = {
        name:'Hema',
        age:12,
        email:'hema@gmail.com'
    }
  return (
    <div className='train-info'>
    <div>A Component</div>
        <B dataA={studentData}/>
    </div>
  )
}

export default A