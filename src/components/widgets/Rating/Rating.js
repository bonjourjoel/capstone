import "./Rating.css";
import star from "../../../assets/star.png";

export default function Rating({rating}) {
  return (
    <div className="rating-container">
      {[...Array(rating)].map((_, index) => <img src={star} key={index} alt='Star' />)}
    </div>
  );
}