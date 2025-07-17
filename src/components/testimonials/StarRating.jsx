import "./testimonials.css";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(rating)].map((_, i) => (
        <i key={i} className="fa-solid fa-star star-icon"></i>
      ))}
    </div>
  );
};

export default StarRating;
