import logo from "../../../assets/logo-hor.svg";
import './Header.css';
import ResponsiveGrid from "../../widgets/ResponsiveGrid/ResponsiveGrid"
import ResponsiveMenu from "../../widgets/ResponsiveMenu/ResponsiveMenu"

export default function Header() {
  return (
    <header id='home'>
      <ResponsiveGrid>
        <ResponsiveMenu
            homeLogo={logo}
            homeUrl="#home"
            homeAlt="Little lemon logo"
            menuItems={[
              { description: 'Home', url: '#home' },
              { description: 'About', url: '#about' },
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