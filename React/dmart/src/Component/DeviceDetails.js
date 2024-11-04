import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
const DeviceDetails = () => {
  let paramId = useParams()
  console.log(paramId.id)
    let [state,setState] = useState(
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
    )

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${paramId.id}`).then(res=>res.json()).then(data=>setState(data))
    },[])
  return (
    <div style={{textAlign:'center'}}>
         <img src={state.image} width="200px" height="200px" />
        <h1>{state.title}</h1>
        <div>{state.description}</div>
      <h3>Price: {state.price}</h3>
      <h3>Rating: {state.rating.rate}</h3>
      <h3>{state.rating.count} reviews</h3>
    </div>
  )
}

export default DeviceDetails