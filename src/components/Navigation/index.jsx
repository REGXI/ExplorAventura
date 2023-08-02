import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAVIGATION_ITEMS } from '../../data/navigationItems'
import './index.scss'

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
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const { t, i18n } = useTranslation()

  const handleResize = () => {
    window.innerWidth < 1015 ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

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
                  <li onClick={() => changeLanguage('en')}>English</li>
                  <li onClick={() => changeLanguage('es')}>Español</li>
                  <li onClick={() => changeLanguage('fr')}>Français</li>
                </ul>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
