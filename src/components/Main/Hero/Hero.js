import "./Hero.css";
import restaurantFood from "../../../assets/restauranfood.jpg";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="default-margins">
        <h1 className="font-title">Little Lemon</h1>
        <h2 className="font-subtitle">Chicago</h2>
        <p className="font-description-white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <div>
        <img src={restaurantFood} className="hero-image" alt="Restaurant food"/>
      </div>
    </section>
  )
}