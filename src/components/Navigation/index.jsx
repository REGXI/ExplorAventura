import { useState, useEffect } from 'react'
import { motion, AnimatePresence, delay } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SocialMedia from '../SocialMedia'
import './index.scss'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const { t } = useTranslation()

  const handleResize = () => {
    window.innerWidth < 1015 ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }

  const NAVIGATION_ITEMS = [
    {
      id: 1,
      name: 'navigation.home',
      path: '/',
      delay: 0.5
    },
    {
      id: 2,
      name: 'navigation.sites',
      path: '/sites',
      delay: 0.4
    },
    {
      id: 3,
      name: 'navigation.about',
      path: '/about',
      delay: 0.3
    },
    {
      id: 4,
      name: 'navigation.package',
      path: '/package',
      delay: 0.2
    },
    {
      id: 5,
      name: 'navigation.contact',
      path: '/contact',
      delay: 0.1
    }
  ]

  const variantsItem = {
    exit: {
      opacity: 0,
      heigh: 0,

      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 0.8
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    width < 1015 ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }, [width])

  return (
    <nav className="navigation">
      <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fa-solid fa-bars" />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-container"
            variants={variantsItem}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <div className="btn-close" onClick={() => setIsMenuOpen(false)}>
              <i className="fa-solid fa-times" />
            </div>

            <ul className="navigation__list">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.li
                  key={item.id}
                  className="navigation__item"
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: 'easeInOut',
                      delay: item.delay
                    }
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'navigation__link navigation__link--active'
                        : 'navigation__link'
                    }
                  >
                    {t(item.name)}
                  </NavLink>
                </motion.li>
              ))}

              <motion.div
                className="content-language"
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: 'easeInOut',
                    delay: 0
                  }
                }}
              >
                <span className="navigation__link language">
                  {t('navigation.language')}{' '}
                  <i className="fa-solid fa-globe-americas" />
                </span>
                <ul className="navigation__language">
                  <li>English</li>
                  <li>Español</li>
                  <li>Français</li>
                </ul>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
