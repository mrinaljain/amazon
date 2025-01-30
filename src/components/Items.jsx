import React from "react";
import { itemList } from "../utils/data/items_data.js";
import ItemCard from "./ItemCard.jsx";
import { useGetProductsQuery } from "../services/productsApi.js";
export const Items = function () {

   const itemData = itemList;
   const { data, error, isLoading } = useGetProductsQuery();
   if (error) return <p>Something went wrong.....</p>
   if (isLoading) return <p>Loading.....</p>
   console.log(data);

   return (
      <>
         <ul>
            {
               data.products.map((product, index) => {
                  return <li> <ItemCard {...product} ></ItemCard></li>
               })
            }

         </ul>
      </>
   );
}