import "./Rating.css";
import star from "../../../assets/star.png";

export default function Rating({rating}) {
  console.log(rating)
  return (
    <div className="rating-container">
      {[...Array(rating)].map(_ => <img src={star} alt='Star' />)}
    </div>
  );
}