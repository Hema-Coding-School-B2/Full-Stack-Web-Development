import React,{useState,useEffect} from 'react'
import './Jewellery.css'
const Jewellery = () => {
    let [jewelleries,setJewelleries] = useState([])
    console.log(jewelleries)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery').then((res)=>{
        // console.log(res.json())
        return res.json()
        }).then((data)=>{
            console.log(data)
            setJewelleries(data)
        })
    },[])
console.log(jewelleries)
  return (
    <div>
        <div className="jewellery-container">{jewelleries.map((jewelery)=>{
            console.log(jewelery)

            return(
                <div className="product-card">
                <img src={jewelery.image} width="200px" height="200px"/>
                <h2>{jewelery.title}</h2>
                <div>{jewelery.description}</div>
                <h3>Price: {jewelery.price}</h3>
                <h3>Rating: {jewelery.rating.rate}</h3>
                <h3>{jewelery.rating.count} reviews</h3>

                </div>
            )
        })}</div>
    </div>
  )
}

export default Jewellery