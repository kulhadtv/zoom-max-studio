import React from 'react'
import Router from './router/router'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
     <Router/>
     <Footer/>
    </div>
  )
}

export default App
