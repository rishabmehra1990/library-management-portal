import { useState, useEffect } from 'react';
import Product from '../Featured_product/Product'
import fetchData from '../util/api';

const Home = () => {
     const [products, setProducts] = useState([]);

      useEffect(() => {
      fetchData("books")
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
