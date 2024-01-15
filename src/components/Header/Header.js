import logo from "../../assets/logo-hor.svg";
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="default-margins">
        <a href='/' className="nav-logo"><img src={logo} alt='Little lemon logo'/></a>
        <a href='/'>Home</a>
        <a href='about'>About</a>
        <a href='menu'>Menu</a>
        <a href='reservations'>Reservations</a>
        <a href='order-online'>Order online</a>
        <a href='login'>Login</a>
      </nav>
    </header>
  )
}