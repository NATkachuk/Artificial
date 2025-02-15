import  './Footer.scss'
import Robot from '../../assets/homepage/svg/Robot.svg'
import mail from '../../assets/homepage/svg/mail.svg'
import phone from '../../assets/homepage/svg/phone.svg'
import map from '../../assets/homepage/svg/map.svg'
import facebook from '../../assets/homepage/svg/facebook.svg'
import insta from '../../assets/homepage/svg/insta.svg'
import  tvit from '../../assets/homepage/svg/tvit.svg'
import inin from '../../assets/homepage/svg/inin.svg'
import you from '../../assets/homepage/svg/you.svg'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-container__box">
                <img src={Robot} alt="Robot" className="footer-container__box-img" />
                <p className="footer-container__box-text1">Artificial Intelligence</p>
                <p className="footer-container__box-text2">Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
            </div>
            <div className="footer-container__box1">
              <div className="footer-container__box1-cont">
                <img src={mail} alt="mail" className="footer-container__box1-cont-img" />
                <a href="" className="footer-container__box1-cont-link">Company@gmail.com</a>
              </div>
              <div className="footer-container__box1-cont">
                <img src={phone} alt="phone" className="footer-container__box1-cont-img" />
                <a href="tel:0643321233"  className="footer-container__box1-cont-link">Phone: (064) 332-1233</a>
              </div>
              <div className="footer-container__box1-cont">
                <img src={map} alt="map" className="footer-container__box1-cont-img" />
                <a href="" className="footer-container__box1-cont-link">450 Wall Street, USA, New York</a>
              </div>
            </div>
        </div>
        <ul className="footer-list">
          <p className="footer-list__title">INFORMATION</p>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">New Collection</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">About Store</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Contact Us</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Latest News</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Our Sitemap</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Orders History</a>
          </li>
        </ul>
        <ul className="footer-list">
          <p className="footer-list__title">FOOTER MENU</p>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Instagram profile</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">New Collection</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Contact Us</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Latest News</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Terms & Conditions</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Purchase Theme</a>
          </li>
        </ul>
        <ul className="footer-list">
          <p className="footer-list__title">USEFUL LINKS</p>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Instagram profile</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">New Collection</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Contact Us</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Latest News</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Terms & Conditions</a>
          </li>
          <li className="footer-list__item">
            <a href="" className="footer-list__link">Purchase Theme</a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer