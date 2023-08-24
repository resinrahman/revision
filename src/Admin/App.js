import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Gallery from './Gallery'
import District from './District'
import Place from './Place'
import Count from './count'
import TTT from './TTT'
const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/district' element={<District/>}/>
          <Route path='/place' element={<Place/>}/>
          <Route path='/count' element={<Count/>}/>
          <Route path='/ttt' element={<TTT/>}/>

        </Routes>
    </div>
  )
}

export default App