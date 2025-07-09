import { useEffect, useState } from "react";
import "./testimonials.css";
import testimonialsData from "./testimonial";

const TestimonialsData = ({ testimonials, currentIndex }) => {
  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="testimonial-slider">
        <TestimonialsData
          testimonials={testimonialsData}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;
