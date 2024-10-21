
import './PackegedGoods.css';

let PackegedGoods=({name,addToCart,image})=>{
    console.log(image)
    let addingToCart =()=>{
        console.log("This is Packaged Goods Dhashboard")
        addToCart({
            id: 2,
            name: "Legumes (beans, lentils, peanuts)",
            image:
              "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          })
    }
    return(
        <div className="goods">

            <h1>This is Packeged Goods Dhashboard</h1>
            <h2>{name}</h2>
            <div>
            <img src={image} alt="image" width='200px' height='200px'/>
            </div>
            <button onClick={addingToCart}>Cart</button>
        </div>
    )
}
export default PackegedGoods