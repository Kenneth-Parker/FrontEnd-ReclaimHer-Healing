import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      Welcome To "ReclaimHer Healing"
    </>
  )
}

export default App
