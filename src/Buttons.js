import React from "react";
import Data from "./Data";

const Buttons = ({ menuItems }) => {
  return (
    <div className=" text-center" >


{menuItems.map((Val, id) => {
          return (
            <button className="btn-dark btn px-1 py-2 m-4  text-white fw-bold ">



{Val}




                         
             
            </button>
          );
        })}


    








      </div>
   
  );
};

export default Buttons;
