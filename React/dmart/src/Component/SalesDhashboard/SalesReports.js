import React,{useRef} from 'react'
import '../styles.css'
import {useSelector} from 'react-redux';
import myAction from '../ReactRedux/action.js'
const SalesReports = () => {
    let data = useSelector((storedData)=>{
        return storedData
      })

    let productName =  useRef()
    let productId = useRef()
    let displayNameRef = useRef()
    console.log(productName)
    let handleSalesReport = (event)=>{
        event.preventDefault()
        displayNameRef.current.textContent = productName.current.value
        console.log(`Product Name ${productName.current.value} and Product Id ${productId.current.value}`)
        myAction(productName.current.value)
    }

  return (
    <div className="train-info">
        <h2>Un Controlled Component {data}</h2>

        <form>

            <div>
                <input type="text" placeholder='Enter Product Name' ref={productName}/>
            </div>
            <div>
            <input type="number" placeholder='Enter Product Id' ref={productId}/>

            </div>
            <button onClick={handleSalesReport}>Submit</button>
        </form>
        <h3 ref={displayNameRef}></h3>
        {/* <h3>{productId.current}</h3> */}

    </div>
  )
}

export default SalesReports