import "../styles.css";
import {useState} from "react"

let StateManagement = () => {

let [state, setState] = useState(0)
console.log(state)
let handleCount=()=>{
    // setState(0)
    // setState(state + 1) // 0 + 1 = 1 || 1 + 1 = 2
    // setState(state + 1)  // 0 + 1 = 1 || 1 + 1 = 2
    // setState(state + 1)  // 0 + 1 = 1|| 1 + 1 = 2

    // setState(state + 1) // 0 + 1 = 1 || 3 + 1 = 4  
    // setState(state + 2)  // 0 + 2 = 2 || 3 + 2 = 5
    // setState(state + 3)  // 0 + 3 = 3 || 3 + 3 = 6

    // setState((prevState)=>{
    //     return prevState + 1
    // })
    // setState(prevState => prevState + 1) // 0 + 1 = 1
    // setState(prevState => prevState + 1) // 1 + 1 = 2
    // setState(prevState => prevState + 1) // 2 + 1 = 3
    setState(prevState => prevState + 1) // 0 + 1 = 1 || 6 + 1 = 7
    setState(prevState => prevState + 2) // 1 + 2 = 3 || 7 +2 = 9
    setState(prevState => prevState + 3) // 3 + 3 = 6 || 9 + 3 = 12
                            
}

  return (
    <div className="train-info">
      <h1>State Management Count : {state}</h1>

      <button onClick={handleCount}>Count++</button>
      <button onClick={handleCount}>Count--</button>
      <button onClick={handleCount}>Count**</button>
      <button onClick={handleCount}>Count//</button>


    </div>
  );
};

export default StateManagement;
