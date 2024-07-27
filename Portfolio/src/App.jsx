import { useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (

    <div>
        <Navbar />
        <Intro />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
