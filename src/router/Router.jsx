import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shows from '../pages/Shows'
import Services from '../pages/Services'
import About from '../pages/About'
import Clients from '../pages/Clients'
import Testimonials from '../pages/Testimonials'
import Career from '../pages/Career'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shows' element={<Shows />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/career' element={<Career />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default Router
