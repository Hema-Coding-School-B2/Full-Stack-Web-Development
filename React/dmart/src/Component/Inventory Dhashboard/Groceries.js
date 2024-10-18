import "../styles.css";
import { useState } from "react";
import PackegedGoods from "./PackegedGoods.js";
let Groceries = () => {
//   let [grocery, setGrocery] = useState("Sugar")
  let [grocery, setGrocery] = useState({
    id: 1,
    name: "Pantry staples (spices, pasta, sauces)",
    image:
      "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  console.log(grocery)

  let addToCart=(item)=>{
    console.log("This is Groceries DashBoard", item)
    setGrocery(item)
  }
  return (
    <div className="train-info">
      <h1>This is Groceries Dhash board</h1>
      <h2>{grocery.name}</h2>
      {/* <h2>{grocery.image}</h2> */}
      <img src={grocery.image} width='200px' height='200px' />
    {/* <h2>{addToCart()}</h2> */}
      <PackegedGoods name={grocery.name} addToCart={addToCart} image={grocery.image}/>
      {/* <PackegedGoods name={grocery.name} addToCart={addToCart}/> */}

    </div>
  );
};

export default Groceries;

// let call =(name12)=>{
//     console.log(name)
// }
// <Call name ="Sugar"/>
// call("sugar")
