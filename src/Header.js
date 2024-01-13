import logo from "./assets/Logo.svg";
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='Little lemon logo'/>
      <nav>
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='about'>About</a></li>
          <li><a href='menu'>Menu</a></li>
          <li><a href='reservations'>Reservations</a></li>
          <li><a href='order-online'>Order online</a></li>
          <li><a href='login'>Login</a></li>
        </ul>
      </nav>
    </header>
  )
}