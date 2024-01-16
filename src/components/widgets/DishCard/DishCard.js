import "./DishCard.css";
import bike from "../../../assets/bike.png";

export default function DishCard({ id, photo, name, description, price}) {
  return (
    <article className="dish-card">
      <img src={photo} alt={name} />
      <div className="content font-description">
        <div className="title">
          <div>{name}</div>
          <div className="price">${Number(price).toFixed(2)}</div>
        </div>
        <p className="description">{description}</p>
        <a href="#delivery" className="delivery">
          Order a delivery
          <img src={bike} className="bike-icon" alt='Bike' />
        </a>
      </div>
    </article>
  );
}