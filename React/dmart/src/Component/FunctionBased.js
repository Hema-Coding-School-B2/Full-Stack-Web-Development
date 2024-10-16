
import {useState} from 'react'
import './styles.css';
let FunctionBased =()=>{
    const [state,setState] = useState({
        trainInfo:"Morning Function express at 8:00 AM"
    })
    console.log(state)
    let handleChageTrainInfo=()=>{
        setState({trainInfo:"Evening Function Express at 5:00PM"})
    }
    return(
        <div className='train-info'>
        <h1>This is Functional based Component</h1>
        <h2>{state.trainInfo}</h2>
        <button onClick={handleChageTrainInfo}>Train Update</button>
        </div>
    )
}

export default FunctionBased;
