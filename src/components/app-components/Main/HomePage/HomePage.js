import About from "../About/About";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import Hero from "../Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}