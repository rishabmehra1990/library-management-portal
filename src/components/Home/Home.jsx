import { useState, useEffect } from 'react';
import Product from '../Product/Product'
import GetData from '../util/GetData';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const Products = async () => {
    const response = await GetData("books");
    setProducts(response);
  };
  Products();
  }, []);

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default Home;
