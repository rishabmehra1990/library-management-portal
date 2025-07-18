import { useEffect, useState } from "react";
import "./testimonials.css";
import TestimonialsData from "./TestimonialsData";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4200);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="testimonial-slider">
        {(!testimonials || testimonials.length === 0) ? (
          <p className="no-testimonials-message">
            No testimonials available or failed to load testimonials.
          </p>
        ) : (
          <TestimonialsData
            testimonials={testimonials}
            currentIndex={currentIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Testimonials;
