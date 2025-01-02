import { useState } from 'react'
import Routing from './Routing'
import Header from './Components/General/Header'
import Footer from './Components/General/Footer'
import './App.css'
import { BrowserRouter } from 'react-router-dom'


function App() {
  
  return (
    <>
   <Header />
   <BrowserRouter><Routing />
   </BrowserRouter>
   <Footer />
    </>
  )
}

export default App
