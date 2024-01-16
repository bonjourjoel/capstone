import { TESTIMONIALS } from "../../../../data/testimonials";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <ResponsiveGrid>
      <section>
        <h1 className="font-subtitle font-color-highlight2">Testimonials</h1>
        <div className="testimonials-container">
          {TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.id} {...testimonial} />)}
        </div>
      </section>
    </ResponsiveGrid>
  )
}