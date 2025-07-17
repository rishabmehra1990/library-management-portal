import React from "react";
import "./product.css"

const ProductCard = ({ product }) => {
  return (
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
  );
};

const Product = ({ products }) => {

  const ProductList = () => {
    return products.map((product) => <ProductCard key={product.id} product={product} />);
  };

  return (
    <div>
      <h2 className="featured-title">Featured Product</h2>
      <div className="featured-section">
        <div className="product-list">
          {ProductList()}
        </div>
      </div>
    </div>
  );
};

export default Product;
