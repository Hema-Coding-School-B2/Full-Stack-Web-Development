import React from 'react'
import '../../styles.css'
import B from './B.js';

import myContext from './MyContext.js';
const A = () => {

    let studentData = {
        name:'Hema',
        age:12,
        email:'hema@gmail.com'
    }
  return (
    <div className='train-info'>
    <div>A Component</div>

    <myContext.Provider value={studentData}>
        <B />
    </myContext.Provider>
    </div>
  )
}

export default A