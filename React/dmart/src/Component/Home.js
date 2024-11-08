import React from 'react'
import dmartLogo from './image.png';
import './styles.css';
import {useSelector} from 'react-redux';
const Home = () => {
 let data = useSelector((storedData)=>{
    return storedData
  })
  return (
    <div className="home">
    <img src={dmartLogo}/>
    <h2>Welcome to D Mart {data}</h2>
    
    </div>
  )
}

export default Home