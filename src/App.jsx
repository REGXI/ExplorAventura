import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

import HomePage from './pages/home'
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sites" element={<div>sites</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/package" element={<div>package</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  )
}

export default App
