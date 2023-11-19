import React from 'react';
import Product from './Product.js';


// const elements = [
//   <Product name="Cheese"></Product>,
//   <Product name="Fungi"></Product>,
//   <Product name="Chess Set"></Product>]

// const mapped = elements.map((prod) =>{
//     <li>{prod}</li>
// });

const Products = () => {
  return (
    <div id = "list of products">
      <li>
        <Product name="Cheese"></Product>
      </li>
      <li>
        <Product name="Fungi"></Product>
      </li>
      <li>
        <Product name="Chess Set"></Product>
      </li>
    </div>
  );
}

export default Products;