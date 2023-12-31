import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
