import React from "react";
import products from "./data.js"
import "./featured_product.css"

const FeaturedProduct = () => {
  return (
    <div>
      <h2 className="featured-title">Featured Product</h2>
      <div className="featured-section">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              <span className="rent-label">RENT!</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discounted-price">₹{product.price}</span>
              </div>
              <button className="wishlist-btn">Add to Wishlist</button>
              <button className="rent-btn">RENT NOW!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default FeaturedProduct;

