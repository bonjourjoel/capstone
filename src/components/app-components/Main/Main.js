import About from "./About/About";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import Hero from "./Hero/Hero";

export default function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}