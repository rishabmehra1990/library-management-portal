import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import Testimonials from '../testimonials/Testimonials';
import { fetchProducts } from '../redux/slices/productReducer.js';
import { fetchTestimonials } from '../redux/slices/testimonialReducer';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.products);
  const { items: testimonials } = useSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return (
    <div>
      <Product products={products} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default Home;
