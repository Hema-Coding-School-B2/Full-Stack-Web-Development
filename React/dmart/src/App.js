import "./App.css";
import './Component/styles.css'
import { useState } from "react";
// import  ClassBased  from "./Component/ClassBased.js";
// import  FunctionBased  from "./Component/FunctionBased.js";

// import StateManagement from "./Component/Hooks/StateManagement.js";
// import Groceries from "./Component/InventoryDhashboard/Groceries.js";
// import ListItem from "./Component/InventoryDhashboard/ListItem.js";

// import Electronics from './Component/InventoryDhashboard/Electronics.js'
// import ComputorAccessories from "./Component/InventoryDhashboard/ComputorAccessories.js";
// import Stand from "./Component/InventoryDhashboard/Stand.js";
// import Jewellery from "./Component/InventoryDhashboard/Jewellery.js";
// import UseRefObject from "./Component/Hooks/UseRefObject.js";
// import SalesReports from './Component/SalesDhashboard/SalesReports.js'
import MonthlySalesReport from './Component/SalesDhashboard/MonthlySalesReport.js'


function App() {
  let [state, setState] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" />
        </div>
        <div className="nav-link">Home</div>
        <div className="nav-link">Home</div>
        <div className="nav-link">Home</div>
        <div className="nav-link">Home</div>
      </div>
      {/* <Electronics/> */}
      {/* <Jewellery/> */}
      {/* <UseRefObject/> */}
      {/* <SalesReports/> */}
      <MonthlySalesReport/>
      {/* {state ? <ComputorAccessories /> : <Stand />}

      <div className="train-info">
        <button onClick={() => setState(true)}>Computor Accessories</button>
        <button onClick={() => setState(false)}>Stand</button>
      </div> */}
    </div>
  );

  // return (
  //   <div>
  //     {/* <StateManagement /> */}
  //     {/* <Groceries /> */}
  //     <ListItem/>
  //   </div>
  // );
  // let showComponent = false;
  // if(showComponent){
  //   console.log("Class")
  // return  <ClassBased />
  // }
  // else{
  //   console.log("function")
  // return  <FunctionBased/>
  // }

  // true ? "Pass" : "Fail"
  // return showComponent ? <ClassBased /> : <FunctionBased/>

  // return (
  //   <div className="App">
  //     Welcome to React js classes
  //     <ClassBased />
  //     <FunctionBased/>
  //   </div>
  // );
}

export default App;
