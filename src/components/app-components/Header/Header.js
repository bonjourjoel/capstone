import logo from "../../../assets/logo-hor.svg";
import './Header.css';
import ResponsiveGrid from "../../widgets/ResponsiveGrid/ResponsiveGrid"
import ResponsiveMenu from "../../widgets/ResponsiveMenu/ResponsiveMenu"

<<<<<<< HEAD
export default function Header() {
  return (
    <header id='home'>
=======
// const scrollTo = (anchorId) => () => {
//   const element = document.getElementById(anchorId);
//   if (element) {
//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }
// };

export default function Header() {
  return (
    <header>
>>>>>>> 2d4f0a0f353128421493dcc108cb0cf86d2a7fb3
      <ResponsiveGrid>
        <ResponsiveMenu
            homeLogo={logo}
            homeUrl="/"
            homeAlt="Little lemon logo"
            menuItems={[
<<<<<<< HEAD
              { description: 'Home', url: '#home' },
              { description: 'About', url: '#about' },
=======
              { description: 'Home', url: '/' },
              { description: 'About', url: 'about' },
>>>>>>> 2d4f0a0f353128421493dcc108cb0cf86d2a7fb3
              { description: 'Menu', url: 'menu' },
              { description: 'Reservations', url: 'reservations' },
              { description: 'Order online', url: 'order-online' },
              { description: 'Login', url: 'login' },
            ]}
        />
      </ResponsiveGrid>
    </header>
  )
}