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
import Footer from './Components/Footer.JSX'
import Portfolio from './Components/Portfolio'

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
        <div id="portfolio">
          <Portfolio />
        </div>
        </main>
        <Footer/>
</div>
  )
}

export default App
