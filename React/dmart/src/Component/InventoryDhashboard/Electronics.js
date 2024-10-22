import React, { useState, useEffect } from "react";
import "./Electronics.css";

const Electronics = () => {
  let [electronic, setEletronic] = useState([
    {
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  ]);
  let getElectronics = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
          console.log(electro);

          return (
            <div className="device-container">
              <img src={electro.image} width="200px" height="200px" />
              <h2>{electro.title}</h2>
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

export default Electronics;
