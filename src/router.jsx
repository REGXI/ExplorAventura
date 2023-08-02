import { Route, Routes, useLocation } from 'react-router-dom'

import HomePage from './pages/home'
import SitesPage from './pages/sites'
import AboutPage from './pages/about'
import PackagesPage from './pages/packages'
import ContactPage from './pages/contact'

export default function Router() {
  const location = useLocation()

  return (
    <Routes path={location.pathname} location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sites" element={<SitesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/package" element={<PackagesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
