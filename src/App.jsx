import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './router'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App
