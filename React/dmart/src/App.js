import "./App.css";
import './Component/styles.css'
import { useState } from "react";
// import  ClassBased  from "./Component/ClassBased.js";
// import  FunctionBased  from "./Component/FunctionBased.js";

// import StateManagement from "./Component/Hooks/StateManagement.js";
import Groceries from "./Component/InventoryDhashboard/Groceries.js";
// import ListItem from "./Component/InventoryDhashboard/ListItem.js";

import Electronics from './Component/InventoryDhashboard/Electronics.js'
import ComputorAccessories from "./Component/InventoryDhashboard/ComputorAccessories.js";
// import Stand from "./Component/InventoryDhashboard/Stand.js";
import Jewellery from "./Component/InventoryDhashboard/Jewellery.js";
// import UseRefObject from "./Component/Hooks/UseRefObject.js";
import SalesReports from './Component/SalesDhashboard/SalesReports.js'
// import MonthlySalesReport from './Component/SalesDhashboard/MonthlySalesReport.js'
// import UseReducer from "./Component/Hooks/UseReducer.js";

// import ShoppingCart from './Component/AvailableProduct/ShoppingCart'

// import UseMemo from './Component/Hooks/UseMemo.js'

// import UseCallback from './Component/Hooks/UseCallback/UseCallback.js'

// import A from './Component/Hooks/UseContext/A.js'
import Home from './Component/Home.js'
import PageNotFound from './Component/PageNotFound.js'
import Device from './Component/Device.js'
import DeviceDetails from './Component/DeviceDetails.js'


import {Routes,Route,Link,Navigate} from 'react-router-dom'

import Product from './Component/AvailableProduct/Product.js'
import CrudApp from './Component/CrudApp.js'

import InputComponent from './Component/ReactRedux/InputComponent.js';
function App() {
  let [state, setState] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" />
        </div>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/crud-app" className="nav-link">Crud App</Link>
    <Link to="/input-component" className="nav-link">Redux App</Link>


    <Link to="/electronics" className="nav-link">Electronics</Link>
    <Link to="/groceries" className="nav-link">Groceries</Link>
    <Link to="/jewellery" className="nav-link">Jewellery</Link>
    <Link to="/sales-reports" className="nav-link">Sales Reports</Link>
    <Link to="/device" className="nav-link">Device</Link>




      
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/crud-app" element={<CrudApp/>} />
        <Route path="/input-component" element={<InputComponent/>} />


        <Route path="/groceries" element={<Groceries/>} />
        <Route path="/jewellery" element={<Jewellery/>} />
        <Route path="/sales-reports" element={<SalesReports/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/device-details/:id" element={<DeviceDetails/>} />


      
        <Route path="/device" element={<Device/>}>
        <Route path="" element={<Navigate to="computor-accessories"/>}/>
        <Route path="computor-accessories" element={<ComputorAccessories/>}/>
        <Route path="product" element={<Product/>}/>


        </Route>



      </Routes>
    </div>
  );

}

export default App;
