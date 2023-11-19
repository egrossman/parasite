// import React from 'react';

export default function Product({ name }) {
    return (
      <div>
        <div id = "product_name">
        {name}
        </div>
        <div >
            <button class="Purchase">Buy</button>
            <button class="Sell">Sell</button>
        </div>
      </div>
    );
  }

// export default Products;