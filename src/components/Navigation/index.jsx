import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './index.scss'

export default function Navigation() {
  const { t } = useTranslation()

  const NAVIGATION_ITEMS = [
    {
      id: 1,
      name: 'navigation.home',
      path: '/'
    },
    {
      id: 2,
      name: 'navigation.sites',
      path: '/sites'
    },
    {
      id: 3,
      name: 'navigation.about',
      path: '/about'
    },
    {
      id: 4,
      name: 'navigation.package',
      path: '/package'
    },
    {
      id: 5,
      name: 'navigation.contact',
      path: '/contact'
    }
  ]

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id} className="navigation__item">
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
          </li>
        ))}

        <div className="content-language">
          <span className="navigation__link language">
            {t('navigation.language')}{' '}
            <i className="fa-solid fa-globe-americas" />
          </span>
          <ul className="navigation__language">
            <li>English</li>
            <li>Español</li>
            <li>Français</li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}
