import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Education from './Components/Education'
import Experince from './Components/Experince'

function App() {

  return (
    <div>
    <Navbar />
    <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="experience">
          <Experince />
        </div>
        </main>
</div>
  )
}

export default App
