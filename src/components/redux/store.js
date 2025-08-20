import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productReducer.js';
import testimonialReducer from './slices/testimonialReducer';

export const store = configureStore({
    reducer: {
        products: productReducer,
        testimonials: testimonialReducer,
    },
});
