import React, { useState, useEffect } from "react";
import "../InventoryDhashboard/Electronics.css";
import {Link} from 'react-router-dom'
const Product = () => {
  let [electronic, setEletronic] = useState([
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      }
  ]);
  let getElectronics = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.json())
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEletronic(data);
      });
  };
  // useEffect(()=>{
  //   getElectronics()
  // },[electronic])
  return (
    <div className="container">
      <div className="electronic-container">
        {console.log(electronic)}

        {electronic.map((electro) => {
          console.log(electro.id);

          return (
            <div className="device-container">
              <img src={electro.image} width="200px" height="200px" />
              <Link to= {`/device-details/${electro.id}`}>
              <h2>{electro.title}</h2>
              </Link>
              <div>{electro.description}</div>
              <h3>Price: {electro.price}</h3>
              <h3>Rating: {electro.rating.rate}</h3>
              <h3>{electro.rating.count} reviews</h3>
            </div>
          );
        })}
        {/* <div>Electronics</div> */}
        {/* <img src={electronic.image} width="200px" height="200px"/>
      <h2>{electronic.title}</h2>
      <div>{electronic.description}</div>
      <h3>Price: {electronic.price}</h3>
      <h3>Rating: {electronic.rating.rate}</h3>
      <h3>{electronic.rating.count} reviews</h3> */}

      </div>
        <button onClick={getElectronics}>View All</button>
    </div>

    // <div className="device-container">
    // {/* <div>Electronics</div> */}
    // <img src={electronic.image} width="200px" height="200px"/>
    // <h2>{electronic.title}</h2>
    // <div>{electronic.description}</div>
    // <h3>Price: {electronic.price}</h3>
    // <h3>Rating: {electronic.rating.rate}</h3>
    // <h3>{electronic.rating.count} reviews</h3>
    // </div>
    // <button onClick={getElectronics}>Electronics</button>
  );
};

export default Product;
