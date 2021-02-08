import React from "react";
import "../styles/ProductCard.css";


function ProductCards(props){
    return (
        <div className="card">
          <img
            src={props.imgSrc}
            alt={props.imageAlt}/>
          <p className="shop-all-money-text-container">{props.price}</p>
          <h2 className="shop-all-h2">{props.name}</h2>
          <p className="shop-all-info">{props.description}</p>
        </div>
    )
}

export default ProductCards;