
import { useContext } from "react"
import CartContext from "../Context/CartContext"


export default function AddToCart(){
        const {showCart,cartItems}=useContext(CartContext);

            console.log("caritems",cartItems)
    return <>
   {showCart && (
    <div>
        {cartItems?.map((item)=>(
            <h1>{item.description}</h1>
        ))}
    </div>
   )}
    </>

}