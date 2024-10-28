import React ,{useState,useCallback} from "react";
import "../../styles.css";
import Amount from "./Amount.js";
import Title from "./Title.js";
import Button from "./Button.js";

const UseCallback = () => {
    let [items, setItems] = useState(0)
    let [amount, setAmount] = useState(100)

   let addItems =  useCallback(()=>{
    setItems(items + 1)
   },[items])

    // let handleChangeItem = () => {
    //   setItems(items + 1);
    // };

    let addAmount =  useCallback(()=>{
        setAmount(amount + 100);
       },[amount])
    // let handleChangeAmount = () => {
    //     setAmount(amount + 100);
    //   };

  return (
    <div className="train-info">
      <div>UseCallback</div>
      <Title />
      <Button handleClick={addItems}>Items Button</Button>
      <Amount item={items}/>

      <Button handleClick={addAmount}>Amount Button</Button>
      <Amount item={amount}/>

    </div>
  );
};

export default UseCallback;
