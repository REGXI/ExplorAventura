import { useState } from 'react'
import CommingSoon from './components/ComingSoon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <CommingSoon />
}

export default App
