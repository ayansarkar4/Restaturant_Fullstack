import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Service from '../components/Service'
import Popular from '../components/Popular'

import Stats from '../components/Stats'
import Member from '../components/Member'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Popular />
      <Member />
      <Stats />
      <Footer />
    
      
      
    </div>
  )
}

export default Home
