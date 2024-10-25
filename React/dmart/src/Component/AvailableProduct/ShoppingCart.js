import React, { useReducer } from "react";
import "../styles.css";
import groceriesData from "../item.js";

const ShoppingCart = () => {
  let intialValue = [];
  let cartReducer = (cartItems, action) => {
    console.log(cartItems);
    console.log(action.payload);
    switch (action.type) {
      case "addToCartItems":
        return [...cartItems, ...action.payload];
        case 'removeFromCartItem':
            return cartItems.filter((item)=>{
                console.log(item)
                console.log(item.id )
                console.log(action.payload)
                console.log(item.id !== action.payload)
                return item.id !== action.payload
            })

        case "updateQuantityItem":
            return cartItems.map((item)=>{
                console.log(item.id)
                console.log(action.payload.id)
                return item.id === action.payload.id ? {...item,quantity:action.payload.quantity} : item
            })
    }
  };
  let [cartItems, dispatch] = useReducer(cartReducer, intialValue);
  console.log(groceriesData);

  let addToCart = (items) => {
    console.log(items);
    dispatch({ type: "addToCartItems", payload: items });
  };
  let removeFromCart=(id)=>{
    console.log(id)
    dispatch({type:'removeFromCartItem', payload:id})
  }
  let updateQuantity=(id,quantity)=>{
    dispatch({type:'updateQuantityItem',payload:{id, quantity}})
  }
  return (
    <div className="train-info">
      <div>ShoppingCart</div>

      <button onClick={() => addToCart(groceriesData)}>Add To Cart </button>
      <button onClick={() => removeFromCart(1)}>Remove from Cart </button>
      <button onClick={() => updateQuantity(3, 20)}>Update Quantity </button>


        {console.log(cartItems)}
      <div>{cartItems.map((item)=>{
        console.log(item)
        return (
            <div>
            <h2>{item.id}</h2>
                <img src={item.image} width="200px" height="200px"/>
            <h3>{item.name}</h3>
            <div>Quantity:{item.quantity}</div>

            </div>
        )
      })}</div>
    </div>
  );
};

export default ShoppingCart;
