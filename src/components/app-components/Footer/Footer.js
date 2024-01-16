import ResponsiveGrid from '../../widgets/ResponsiveGrid/ResponsiveGrid';
import './Footer.css';
import pic from "../../../assets/logo-ver.png";
import facebook from "../../../assets/icon-facebook.png";
import twitter from "../../../assets/icon-twitter.png";
import youtube from "../../../assets/icon-youtube.png";

export default function Footer() {
  return (
    <ResponsiveGrid>
      <footer>
        <div>
          <img src={pic} className="footer-pic" alt='Little lemon food'/>
        </div>
        <div>
            <div><a href='/'>Home</a></div>
            <div><a href='about'>About</a></div>
            <div><a href='Menu'>menu</a></div>
            <div><a href='reservations'>Reservations</a></div>
            <div><a href='order-online'>Order Online</a></div>
            <div><a href='login'>Login</a></div>
        </div>
        <div>
            <div>📫 11 Baker street, 45055 Chicago</div>
            <div>☎️ 555-0606-8796</div>
            <div>📧 <a href='mailto:someone@somewhere.us'>email</a></div>
        </div>
        <div>
            <div><a href='https://facebook.com'>
              <img src={facebook} className='icon-size' alt='Facebook' /> Facebook
            </a></div>
            <div><a href='https://twitter.com'>
              <img src={twitter} className='icon-size' alt='Twitter' /> Twitter
            </a></div>
            <div><a href='https://youtube.com'>
              <img src={youtube} className='icon-size' alt='Youtube' /> Youtube
            </a></div>
        </div>
      </footer>
    </ResponsiveGrid>
  )
}