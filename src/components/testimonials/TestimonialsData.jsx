const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(rating)].map((_, i) => (
        <i key={i} className="fa-solid fa-star star-icon"></i>
      ))}
    </div>
  );
};

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
          <div className="testimonial-rating">
            <StarRating rating={testimonial.rating} />
          </div>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsData;
