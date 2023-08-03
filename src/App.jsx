import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './router'

import './App.css'

function App() {
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Header />
        <Router />
        <Footer />
      </AnimatePresence>
    </div>
  )
}

export default App
