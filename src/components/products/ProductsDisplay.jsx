import React from "react";
import lupe from "../../assets/lupe.png";
//const img =
//("https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg");
const ProductsDisplay = ({ colors = [], name, price, pic = lupe }) => {
  return (
    <div className="product-card">
      <img width="150" src={pic} alt={name} />
      <h2>{name}</h2>
      <p>
        ${price}
        .00 MXN
      </p>
      <p>{price}</p>
      <div style={{ display: "flex", margin: "23px" }}>
        {colors.map((color, index) => (
          <div style={{ backgroundColor: color }} className="colorsin" />
          // pass color string into element
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
