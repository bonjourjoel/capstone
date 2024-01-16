import logo from "../../../assets/logo-hor.svg";
import './Header.css';
import ResponsiveGrid from "../../widgets/ResponsiveGrid/ResponsiveGrid"
import ResponsiveMenu from "../../widgets/ResponsiveMenu/ResponsiveMenu"

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
      <ResponsiveGrid>
        <ResponsiveMenu
            homeLogo={logo}
            homeUrl="/"
            homeAlt="Little lemon logo"
            menuItems={[
              { description: 'Home', url: '/' },
              { description: 'About', url: 'about' },
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