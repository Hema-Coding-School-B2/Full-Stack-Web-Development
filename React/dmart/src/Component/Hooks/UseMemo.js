import React,{useState,useMemo} from 'react'
import "../styles.css";

const UseMemo = () => {
    let [number, setNumber] = useState(0)
    let [count, setCount] = useState(100)

   let isEven =  useMemo(()=>{
    for(let i=0;i<=10000;i++){
        console.log(i)
    }
    return number%2 ===0;
},[number])

    let handleChangeNumber=()=>{
        setNumber(number+1)
    }

    let handleChangeCount=()=>{
        setCount(count+100)
    }
    // let isEven=()=>{
    //     for(let i=0;i<=10000;i++){
    //         console.log(i)
    //     }
    //     return number%2 ===0;
    // }
    // console.log(isEven())
  return (
    <div className="train-info">

    <div>UseMemo</div>

    {/* <h2>Number {number} is {isEven()?"Even":"Odd"}</h2> */}
    <h2>Number {number} is {isEven ?"Even":"Odd"}</h2>

    <h2>Count is {count}</h2>
    <button onClick={handleChangeNumber}>Number</button>
    <button onClick={handleChangeCount}>Count</button>

    </div>
  )
}

export default UseMemo