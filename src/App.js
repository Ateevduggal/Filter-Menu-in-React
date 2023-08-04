import React, { useState } from "react";
import Data from "./Data";
import Buttons from "./Buttons";
import Card from "./Card";

const App = () => {
  const [item, setItems] = useState(Data);

  //create new array from Data  have only products categories
  const menuItems = [...new Set(Data.map((val) => val.category))];

  console.log(menuItems);

  return (
    <div className="  container-fluid container">
      <h1 className=" text-center p-4  text-primary"> PRODUCTS PROJECT </h1>


{/* // send categories to show in   buttons component  */}
      <Buttons menuItems={menuItems} />



 {/* //    send products to card component  */}

      <Card item={item} />
    </div>
  );
};

export default App;
