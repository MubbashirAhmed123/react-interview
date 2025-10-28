import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Rating from './components/Rating'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

    <div className='bg-purple-400'>
      <Navbar/>
    <Header/>
    <Rating/>
    </div>
    <Hero/>
    <Features/>
    <Footer/>
    
     
    </div>
  )
}

export default App
