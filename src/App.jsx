import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Forum from "./Pages/Forum"
import Resources from "./Pages/Resources"
import Events from "./Pages/Events"
import Contact from "./Pages/Contact"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
