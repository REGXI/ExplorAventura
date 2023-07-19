import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import SitesPage from './pages/sites'
import AboutPage from './pages/about'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sites" element={<SitesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/package" element={<div>package</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  )
}
