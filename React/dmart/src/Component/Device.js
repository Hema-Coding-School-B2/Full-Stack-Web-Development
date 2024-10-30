import React from 'react';
import {Link, Outlet} from 'react-router-dom'


const Device = () => {
  return (
    <div>
        <Link to="computor-accessories">Computor Accessories</Link>
        <Outlet/>
    </div>
  )
}

export default Device