import React from 'react'
import { useDispatch } from "react-redux";
import { addItem } from '../utils/slices/cartSlice';
const ItemCard = function (props) {
   const { id, title, description, price, stock, rating, reviews, images: [firstImage] } = props;
   const dispatch = useDispatch();
   function addItemToCart(item) {
      dispatch(addItem(item));
   }
   const imageStyle = {
      width: 200
   }
   return (
      <div className="w-80 rounded-lg shadow-md border p-4 bg-white">
         <img
            src={firstImage}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
            style={imageStyle}
         />
         <h2 className="text-lg font-semibold mt-2">{title}</h2>
         <p className="text-gray-600 text-sm">{description}</p>
         <p className="text-blue-600 font-bold mt-2">${price.toFixed(2)}</p>
         <div className="flex items-center gap-1 mt-2 text-yellow-500">
            ⭐ <span className="text-sm font-medium">{rating}</span>
         </div>
         <p className={`mt-1 text-sm font-semibold ${stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {stock > 0 ? "In Stock" : "Out of Stock"}
         </p>
         <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={() => addItemToCart(props)}>
            Add to cart
         </button>
      </div>


   )
}

export default ItemCard;