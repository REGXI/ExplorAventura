import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Exploraventura.webp'

import './index.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="ExplorAventura travel" />
            <span>ExplorAventura</span>
          </Link>
        </div>

        <Navigation />

        <div className="header__social">
          <a href="tel:+51999999999">
            <i className="fa-solid fa-phone" />
            <span>+505 1234 567</span>
          </a>
          <a
            href="https://www.facebook.com/ExplorAventura-Travel-101501368925201"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <i className="fa-brands fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/exploraventura.travel/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </header>
  )
}
