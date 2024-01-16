import greekSalad from "../assets/greek-salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

export const DISHES = [
  {
    id: 1,
    photo: greekSalad,
    name: 'Greek salad',
    description: 'The famous greek salad of crispy letuce, peppers, olives and our Chicago style feta cheese, garnished with crinchy garlic and rosemary croutons.',
    price: 12.99,
  },
  {
    id: 2,
    photo: bruchetta,
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: 5.99,
  },
  {
    id: 3,
    photo: lemonDessert,
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: 5,
  },
];