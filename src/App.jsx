import React from 'react'
import "./App.css"
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'
// import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import Scrollup from './components/Scrollup/Scrollup'


export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
        
      </main>

      <Footer />
        {/* <Scrollup /> */}

    </>
  )
}
