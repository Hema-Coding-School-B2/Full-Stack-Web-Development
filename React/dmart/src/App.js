import "./App.css";
// import  ClassBased  from "./Component/ClassBased.js";
// import  FunctionBased  from "./Component/FunctionBased.js";

// import StateManagement from "./Component/Hooks/StateManagement.js";
// import Groceries from "./Component/Inventory Dhashboard/Groceries.js";
import ListItem from "./Component/Inventory Dhashboard/ListItem.js";


function App() {
  return (
    <div>
      {/* <StateManagement /> */}
      {/* <Groceries /> */}
      <ListItem/>
    </div>
  );
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
