import "./Hero.css";
import restaurantFood from "../../../../assets/restauranfood.jpg";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import Button from "../../../widgets/Button/Button";

export default function Hero() {
  return (
      <ResponsiveGrid colored>
      <section className="hero-container">
        <div className="hero-main-div">
          <h1 className="font-title">Little Lemon</h1>
          <h2 className="font-subtitle">Chicago</h2>
          <p className="hero-paragraph font-color-highlight1">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <Button>Reserve a table</Button>
        <img src={restaurantFood} className="hero-image" alt="Restaurant food"/>
      </section>
    </ResponsiveGrid>
  )
}