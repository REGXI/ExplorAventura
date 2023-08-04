import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import HomePage from './pages/home'
import SitesPage from './pages/sites'
import AboutPage from './pages/about'
import PackagesPage from './pages/packages'
import ContactPage from './pages/contact'

export default function Router() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes path={location.pathname} location={location}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/sites" element={<SitesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/package" element={<PackagesPage />}>
          <Route path=":destination" element={<PackagesPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}
