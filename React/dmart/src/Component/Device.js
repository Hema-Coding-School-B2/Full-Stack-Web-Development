import React from 'react';
import {Link, Outlet,NavLink} from 'react-router-dom'
import './device.css'

const Device = () => {
  return (
    <div className="dev-container">
      <div>
        {/* <Link to="computor-accessories"  className='dev-link'>Computor Accessories</Link>
        <Link to="product"  className='dev-link'>Product</Link> */}

        <NavLink to="computor-accessories"  className='dev-link'>Computor Accessories</NavLink>
        <NavLink to="product"  className='dev-link'>Product</NavLink>

      </div>
      
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Device