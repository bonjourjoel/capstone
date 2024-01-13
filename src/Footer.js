import pic from "./assets/restauranfood.jpg";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={pic} className="footer-pic" alt='Little lemon food'/>
      </div>
      <div>
          <div><a href='home'>Home</a></div>
          <div><a href='about'>About</a></div>
          <div><a href='menu'>menu</a></div>
          <div><a href='reservations'>Reservations</a></div>
          <div><a href='order-online'>Order Online</a></div>
          <div><a href='login'>Login</a></div>
      </div>
      <div>
          <div><a href='contact-address'>Address</a></div>
          <div><a href='contact-phone-number'>Phone number</a></div>
          <div><a href='contact-email'>email</a></div>
      </div>
      <div>
          <div><a href='https://facebook.com'>Facebook</a></div>
          <div><a href='https://twitter.com'>Twitter</a></div>
          <div><a href='https://divnkedin.com'>divnkedin</a></div>
      </div>
    </footer>
  )
}