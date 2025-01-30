import React from 'react'

const ItemCard = function (props) {
   // console.log(props);
   const { id, name, price, rating, reviews, image_url } = props;
   return (
      <div className="w-72 rounded-lg shadow-md border p-4 bg-white" >
         <img
            src={image_url}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
         />
         <h2 className="text-lg font-semibold mt-2">{name}</h2>
         <p className="text-gray-600 text-sm">${price.toFixed(2)}</p>
         <div className="flex -center gap-1 mt-2 text-yellow-500">
            ⭐ <span className="text-sm font-medium">{rating} ({reviews})</span>
         </div>
         <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Add to cart
         </button>
      </div>
   )
}

export default ItemCard;