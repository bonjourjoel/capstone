import Rating from "../../../widgets/Rating/Rating";
import "./TestimonialCard.css";

export default function TestimonialCard({photo, name, rating, review}) {
  return (
    <div className="rating">
      <div>
        <Rating rating={rating} />
      </div>
      <div className="rating-user">
        <img src={photo} className="rating-photo" alt={name} />
        <span className='font-description'>{name}</span>
      </div>
      <p className='font-description rating-review'>{review}</p>
    </div>
  );
}