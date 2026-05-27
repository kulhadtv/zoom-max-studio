import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Router from './router/Router'

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
