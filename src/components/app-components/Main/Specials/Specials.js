import { DISHES } from "../../../../data/dishes";
import DishCard from "../../../widgets/DishCard/DishCard";
import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import "./Specials.css";
import SpecialsHeader from "./SpecialsHeader";

export default function Specials() {
  return (
    <ResponsiveGrid>
      <section>
        <SpecialsHeader />
        <div className="special-dishes-container">
          {
            DISHES.map(dish => <DishCard key={dish.id} {...dish} />)
          }
        </div>
      </section>
    </ResponsiveGrid>
  )
}