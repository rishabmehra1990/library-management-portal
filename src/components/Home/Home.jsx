import { useState, useEffect } from 'react';
import Product from '../Product/Product'
import GetData from '../util/GetData';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
     const fetchTestimonials = async () => {
     const response = await GetData("testimonials");
      setTestimonials(response);
     };
    const Products = async () => {
    const response = await GetData("books");
    setProducts(response);
  };
  Products();
  fetchTestimonials();
  }, []);

  return (
    <div>
      <Product products={products} />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}

export default Home;
