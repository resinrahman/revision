import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Guest from './Guest/App';
import User from './User/App';
import Admin from './Admin/App';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Guest/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default App