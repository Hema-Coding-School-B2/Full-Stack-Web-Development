import React,{useState} from "react";
import "../styles.css";

const MonthlySalesReport = () => {
    // let [formData, setFormData] = useState("Mahesh")

    let [formData, setFormData] = useState([{
        productName:'',
        productId:''
    }])

  return (
    <div className="train-info">
      <h2>Controlled Component</h2>

      <form>
        <div>
          <input type="text" placeholder="Enter Product Name" onChange={(e)=>setFormData({...formData,productName:e.target.value})}/>
        </div>
        <div>
          <input type="number" placeholder="Enter Product Id" onChange={(e)=>setFormData({...formData,productId:e.target.value})} />
        </div>
        <button>Submit</button>
      </form>

      <h2>{formData.productName}</h2>
      <h2>{formData.productId}</h2>

    </div>
  );
};

export default MonthlySalesReport;
