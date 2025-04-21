import React, { useState } from "react";

function PlantCard({plant}) {
  const[instock,setInstock]=useState(true);
  const change=()=>{
   setInstock((prev)=>!prev)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {instock ? (
        <button onClick={change} className="primary">In Stock</button>
      ) : (
        <button onClick={change}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
