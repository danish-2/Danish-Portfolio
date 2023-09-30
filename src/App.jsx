import React from 'react'
import "./App.css"
import Home from './components/Home/Home'
import Header from './components/Header/Header'


export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />

      </main>

    </>
  )
}
