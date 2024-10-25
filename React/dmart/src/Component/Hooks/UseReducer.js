import React, { useState,useReducer } from "react";
import "../styles.css";

const UseReducer = () => {
//   let [state, setState] = useState(0);
    // console.log(setState)
    let intialValue = 0;
    let reducer=(state,action)=>{

        console.log(state)
        console.log(action.type)

        // if(action.type==="add"){
        //     return state + 1
        // }
        switch (action.type) {
          case "add":
            return state + 1;
          case "sub":
            return state - 1;
          case "mul":
            return state * 2;
          case "div":
            return state / 2;
            case "reset":
                return 0;
        }

    }
  let [state, dispatch] = useReducer(reducer,intialValue)
//   console.log(dispatch)

  return (
    <div className="train-info">
      <div>UseReducer</div>

      <h2>{state}</h2>
      {/* <button onClick={()=>setState(state+1)}>Add</button>
      <button onClick={()=>setState(state - 1)}>Sub</button>
      <button onClick={()=>setState(state*2)}>Mul</button>
      <button onClick={()=>setState(state/2)}>Div</button> */}

      <button onClick={()=>dispatch({type:'add'})}>Add</button>
      <button onClick={()=>dispatch({type:'sub'})}>Sub</button>
      <button onClick={()=>dispatch({type:'mul'})}>Mul</button>
      <button onClick={()=>dispatch({type:'div'})}>Div</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>





    </div>
  );
};

export default UseReducer;
