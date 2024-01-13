import logo from "./assets/Logo.svg";


export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt='Little lemon logo'/>
      </div>
      <div>
        <p>Doormat Navigation</p>
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='about'>About</a></li>
          <li><a href='menu'>menu</a></li>
          <li><a href='reservations'>Reservations</a></li>
          <li><a href='order-online'>Order Online</a></li>
          <li><a href='login'>Login</a></li>
        </ul>
      </div>
      <div>
        <p>Contact</p>
        <ul>
          <li><a href='contact-address'>Address</a></li>
          <li><a href='contact-phone-number'>Phone number</a></li>
          <li><a href='contact-email'>email</a></li>
        </ul>
      </div>
      <div>
        <p>Social media links</p>
        <ul>
          <li><a href='https://facebook.com'>Facebook</a></li>
          <li><a href='https://twitter.com'>Twitter</a></li>
          <li><a href='https://linkedin.com'>Linkedin</a></li>
        </ul>
      </div>
    </footer>
  )
}