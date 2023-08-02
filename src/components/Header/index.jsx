import { useState, useRef } from 'react'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Exploraventura.webp'
import { useSelector } from 'react-redux'
import SocialMedia from '../SocialMedia'

import './index.scss'

export default function Header() {
  const headerRef = useRef(null)
  let lastScrollTop = 0
  const { navigationColor } = useSelector((state) => state.navigationColor)

  window.addEventListener('scroll', () => {
    const header = headerRef.current
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (header === null) return

    if (scrollTop > lastScrollTop) {
      header.classList.add('header-container--hide')
    } else {
      header.classList.remove('header-container--hide')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="ExplorAventura travel" />
            <span style={{ color: navigationColor === 'light' && '#fff' }}>
              ExplorAventura
            </span>
          </Link>
        </div>

        <div className="navigation-content">
          <Navigation />
        </div>

        <SocialMedia navigationColor={navigationColor} />
      </div>
    </header>
  )
}
