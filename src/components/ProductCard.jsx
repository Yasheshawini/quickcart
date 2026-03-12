import React from "react";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p><strong>${product.price}</strong></p>
    <p><em>{product.category}</em></p>
  </div>
);

export default ProductCard;