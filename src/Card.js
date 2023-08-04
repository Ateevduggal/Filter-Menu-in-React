import React from "react";

const Card = ({ item }) => {
  return (
    <>


<div className=" row justify-content-center p-2 ">





{item.map((product, id) => {
          return (
            <div className="col-md-4 col-sm-6  p-2 card my-3 py-3 border-0">

<div class="card" style={{width: "18rem"}}>
  
  <img src={product.img} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





             
            </div>
          );
        })}



</div>





    
    </>
  );
};

export default Card;
