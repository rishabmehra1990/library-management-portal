import { useState, useEffect } from 'react';
import Product from '../Featured_product/Product'

const Home = () => {
     const [products, setProducts] = useState([]);
    
      useEffect(() => {
      fetch("http://localhost:4000/books")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json(); 
        })
        .then((data) => {
          setProducts(data); 
        })
        .catch((err) => {
          console.error("Failed to fetch products:", err);
        });
    }, []);
    
    return (
        <div>
            <Product products={products}/>
        </div>
    )
}

export default Home
