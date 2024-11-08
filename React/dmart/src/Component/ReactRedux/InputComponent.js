import React,{useState}from 'react';
import '../styles.css'
import myAction from './action.js'

// import myStore from './store.js'

const InputComponent = () => {
    let [state, setState] = useState('')
    // console.log(myStore)

    myAction(state)
  return (
    <div className='train-info'>
        <input type='text' placeholder="Enter Your Name" onChange={(e)=>setState(e.target.value)}/>
        <button>Add Name</button>

        <div>{state}</div>
    </div>
  )
}

export default InputComponent