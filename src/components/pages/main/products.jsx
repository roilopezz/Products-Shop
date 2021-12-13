import React, { Component } from "react";
import Product from "./proudct";

import { CartContexts } from "../../../contexts/contexCart";

class Products extends Component {
  static contextType = CartContexts;

  render() {
    const {
      products,
      handleDelete,
      handleIncrement,
      handleDecrement,
      addToCart,
    } = this.context;
    if (!products.length) {
      return <p className="text-center pt-5">No products ...</p>;
    }

    return products.map((product) => (
      <Product
        key={product.id}
        product={product}
        onDelete={() => handleDelete(product.id)}
        onPlus={() => handleIncrement(product.id)}
        onMinus={() => handleDecrement(product.id)}
        onCart={() => addToCart(product.id)}
      />
    ));
  }
}

export default Products;
