// es una clase
import React, { Component } from "react";
import ProductsDisplay from "./ProductsDisplay";

class ProductsContains extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "didlo",
        price: 123,
        colors: ["red", "blue", "white"]
      },
      {
        id: 2,
        name: "perro",
        price: 142,
        pic:
          "https://cdn.pixabay.com/photo/2016/11/12/20/54/kiss-1819738_960_720.jpg",
        colors: ["red", "blue", "white"]
      },
      {
        id: 3,
        name: "pollo",
        price: 541,
        pic: "https://www.educima.com/dibujo-para-colorear-pollo-dm17744.jpg",
        colors: ["red", "blue", "white"]
      },
      {
        id: 4,
        name: "cellPhone",
        price: 14,
        pic:
          "https://images-na.ssl-images-amazon.com/images/I/618opfUobFL._SY445_.jpg",
        colors: ["red", "blue", "white"]
      }
    ]
  };
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) this.props.history.push('/login')
  }
  showProduct = (product, index) => {
    return <ProductsDisplay key={index} {...product} />;
  };

  render() {
    const { products } = this.state;
    return <div className="flex-papa">{products.map(this.showProduct)}</div>;
  }
}
export default ProductsContains;
