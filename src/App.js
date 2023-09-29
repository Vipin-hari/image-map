import React from 'react';
import mapData from './indiaMapData.json';
import IndiaMap from './IndiaMap';
import blogData from './blogData.json';
import MiniBlog from './MiniBlog';
import productData from './Products.json'
import ProductCard from './ProductCard';

function App() {
  return (
    <div>
      <h1>Indian Cities</h1>
      <IndiaMap mapData={mapData}/>
      <MiniBlog blogs={blogData} />
      <div className="product-card-container">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>
      
    </div>
  );
}

export default App;
