import { useState, useEffect } from 'react';
import Product from '../Product/Product'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetAllBooks(setProducts);
  }, []);

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default Home
