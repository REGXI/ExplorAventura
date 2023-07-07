import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

import HomePage from './pages/home'
import SitesPage from './pages/sites'
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sites" element={<SitesPage />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/package" element={<div>package</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
