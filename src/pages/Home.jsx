import { React } from "react";
import { Items } from "../components/Items.jsx";
import Header from "../components/Header.jsx";


// React component is a function that returns a JSX  element
export default Home = function () {


   return (
      <>
         <div>
            <h1>This is home Page listing</h1>
            <Header />
            <Items />
         </div>
      </>
   );

} 