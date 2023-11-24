import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Homepage from './components/Homepage'
import PredictForm from './components/PredictForm'
import About from './components/About'
import Contact from './components/Contact'
import Crop from './components/Crop'

import { Routes, Route } from 'react-router'
 
function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/predict' element={<PredictForm/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
