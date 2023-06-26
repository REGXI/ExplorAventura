import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
            <NavLink to={item.path} className="navigation__link">
              {t(item.name)}
            </NavLink>
          </li>
        ))}
      </ul>

      <h1>{t('navigation.home')}</h1>
    </nav>
  )
}
