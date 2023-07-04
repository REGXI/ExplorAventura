import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Exploraventura.webp'
import SocialMedia from '../SocialMedia'

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

        <div className="navigation-content">
          <Navigation />
        </div>

        <SocialMedia />
      </div>
    </header>
  )
}
