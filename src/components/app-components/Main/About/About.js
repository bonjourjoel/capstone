import "./About.css";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import restaurantRoom from "../../../../assets/restaurant-room.jpg";
import restaurantChef from "../../../../assets/restaurant-chef.jpg";

export default function About() {
  return (
    <ResponsiveGrid colored>
      <section id="about" className="about-container">
        <div className="about-main-div">
          <h1 className="font-title">Little Lemon</h1>
          <h2 className="font-subtitle">Chicago</h2>
          <p className="about-paragraph font-color-highlight1">Little Lemon is a charming neighbohood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <img src={restaurantRoom} className="about-image about-image-1" alt="Restaurant room"/>
        <img src={restaurantChef} className="about-image about-image-2" alt="Restaurant chef"/>
      </section>
    </ResponsiveGrid>
  )
}