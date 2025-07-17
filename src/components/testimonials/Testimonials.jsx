import { useEffect, useState } from "react";
import "./testimonials.css";

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
          <p className="testimonial-text">{testimonial.description}</p>
          <p className="testimonial-rating">
            {" "}
            {[...Array(testimonial.rating)].map((_, i) => (
              <i key={i} className="fa-solid fa-star" style={{ color: "#fbc02d", marginLeft: "4px" }}></i>
            ))}
          </p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

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
        <TestimonialsData
          testimonials={testimonials}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;
