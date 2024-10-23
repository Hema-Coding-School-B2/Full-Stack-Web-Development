import React, { useState,useEffect } from "react";
import "../styles.css";

const ComputorAccessories = () => {
  let [mobile, setMobile] = useState(
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDIxNl8xLnBuZw.png"
  );
  let [mouse,setMouse] = useState("https://m.media-amazon.com/images/I/61KSceiLHwL._AC_UF1000,1000_QL80_DpWeblab_.jpg")
useEffect(()=>{
    console.log("This is use effect auto call")
    localStorage.setItem('name','Mahesh')
    localStorage.setItem('age',20)
    document.title="Computor Accessories"
    return (
        ()=>{
          // localStorage.removeItem('age')
          localStorage.clear()


            console.log("This component is Un Mounted")
        }
    )
},[])
  return (
    <div className="train-info">
        
      <div>Computor Accessories Component</div>
      <div>
        <img src={mobile} width="200px" height="200px" />
        <img src={mouse} width="200px" height="200px" />

      </div>
      <button
        onClick={() =>
          setMobile(
            "https://static.vecteezy.com/system/resources/previews/011/765/916/original/gold-smartphone-model-apple-iphone-14-pro-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg"
          )
        }
      >
        Mobile
      </button>

      <button onClick={()=>setMouse("https://www.daskeyboard.com/images/mactigr/MacTigr-thumb-top.jpeg")}>Keyboard</button>
    </div>
  );
};

export default ComputorAccessories;
