import React from "react";
import lupe from "../../assets/lupe.png";
//const img =
//("https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg");
const ProductsDisplay = ({ name, price, pic = lupe }) => {
  return (
    <div className="product-card">
      <img width="150" src={pic} alt={name} />
      <h2>{name}</h2>
      <p>
        ${price}
        .00 MXN
      </p>
      <p>{price}</p>
    </div>
  );
};

export default ProductsDisplay;
