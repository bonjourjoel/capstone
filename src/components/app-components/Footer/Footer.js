import ResponsiveGrid from '../../widgets/ResponsiveGrid/ResponsiveGrid';
import './Footer.css';
import pic from "../../../assets/logo-ver.png";
import facebook from "../../../assets/icon-facebook.png";
import twitter from "../../../assets/icon-twitter.png";
import youtube from "../../../assets/icon-youtube.png";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <ResponsiveGrid>
      <footer>
        <div>
          <img src={pic} className="footer-pic" alt='Little lemon food'/>
        </div>
        <div>
            <div><HashLink smooth to='/#home'>Home</HashLink></div>
            <div><HashLink smooth to='/#about'>About</HashLink></div>
            <div><HashLink smooth to='#menu'>Menu</HashLink></div>
            <div><HashLink smooth to='/booking'>Reservations</HashLink></div>
            <div><HashLink smooth to='#order-online'>Order Online</HashLink></div>
            <div><HashLink smooth to='#login'>Login</HashLink></div>
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