import { useState, useEffect } from 'react';
import Product from '../Product/Product'
import Testimonials from '../testimonials/Testimonials'
import GetData from '../util/GetData';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await GetData("testimonials");
      if (response) {
        setTestimonials(response);
      } else {
        setTestimonials([]);
      }
    };
    const Products = async () => {
      const response = await GetData("books");
      if (response) {
        setProducts(response);
      } else {
        setProducts([]);
      }
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
