import { React } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";


// React component is a function that returns a JSX  element
const Cart = function () {
   const cartItems = useSelector((state) => state.cart);


   return (
      <>
         <div>
            <h1>This is Cart Page</h1>

            {cartItems.map((item) => <ItemCard {...item} />)}

         </div>
      </>
   );

}

export default Cart;