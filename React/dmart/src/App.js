import "./App.css";
import  ClassBased  from "./Component/ClassBased.js";
import  FunctionBased  from "./Component/FunctionBased.js";

function App() {
  return (
    <div className="App">
      Welcome to React js classes
      <ClassBased />
      <FunctionBased/>
    </div>
  );
}

export default App;
