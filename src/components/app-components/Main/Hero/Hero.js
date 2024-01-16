import "./Hero.css";
import restaurantFood from "../../../../assets/restaurant-food.jpg";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import Button from "../../../widgets/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
      <ResponsiveGrid colored>
      <section className="hero-container">
        <div className="hero-main-div">
          <h1 className="font-title">Little Lemon</h1>
          <h2 className="font-subtitle">Chicago</h2>
          <p className="hero-paragraph font-color-highlight1">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <Button onClick={() => navigate('/booking')}>Reserve a table</Button>
        <img src={restaurantFood} className="hero-image" alt="Restaurant food"/>
      </section>
    </ResponsiveGrid>
  )
}