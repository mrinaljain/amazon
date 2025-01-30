import React from "react";
import { itemList } from "../utils/data/items_data.js";
import ItemCard from "./ItemCard.jsx";
export const Items = function () {

   const itemData = itemList;

   return (
      <>
         <ul>
            {
               itemData.map((item, index) => {
                  return <li> <ItemCard {...item} ></ItemCard></li>
               })
            }

         </ul>
      </>
   );
}