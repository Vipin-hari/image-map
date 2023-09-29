import React from 'react';
import './card.css';

function ProductCard({ product }) {
  return (
    <div className='whole-card'>
      <div className="card">
        <img src={product.image} alt={product.type} className="card-image" />
        <div className="card-content">
          <h2 className="card-type">{product.type}</h2>
          <p className="card-place">Place: {product.place}</p>
          <p className="card-price">Price: Rs.{product.price}/Kg</p>
          <p className="card-owner">Owner: {product.owner}</p>
          <p className="card-contact">Contact: {product.contact}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
