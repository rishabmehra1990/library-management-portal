import StarRating from "./StarRating";

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
            <StarRating rating={testimonial.rating} />
          </p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsData;
