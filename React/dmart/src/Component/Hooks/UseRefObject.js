// import React,{useRef} from 'react'

// const UseRefObject = () => {
//     let refElement = useRef("Mahesh")
//     refElement.current = "Hema"
//     console.log(refElement)

//     let handleChange=()=>{
//         document.getElementById('text').style.backgroundColor = "yellow"
//         refElement.current.style.backgroundColor="blue"
//     }

//   return (
//     <div>
//         {/* <div>{refElement.current}</div> */}

//         <h2 id='text'>Use Ref Component DOM</h2>
//         <h2 ref={refElement}>Use Ref Component Current</h2>

//         <button onClick={handleChange}>Change</button>
//     </div>
//   )
// }

// export default UseRefObject

import React, { useState, useRef } from "react";
import "../styles.css";

const UseRefObject = () => {
  let [seconds, setSeconds] = useState(0);

  let timerStop =  useRef();
  let handleTimerStart = () => {
    timerStop.current = setInterval(() => {
        console.log("start")
      setSeconds((preVal) => preVal + 1);
    }, 1000);
  };

  let handleStop = () => {
    console.log("stop")
    clearInterval( timerStop.current);
  };
  return (
    <div className="train-info">
      <h2>Timer</h2>
      <h2>{seconds}</h2>

      <button onClick={handleTimerStart}>Start Time</button>
      <button onClick={handleStop}>Stop Time</button>
    </div>
  );
};

export default UseRefObject;
