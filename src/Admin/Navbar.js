import React from 'react'
import './navbar.css' 
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='d1'>
            <Link to={'./district'}>District</Link>
            
        </div>
        <div className='d2'>
            <Link to={'./place'}>Place</Link></div>
        <div className='d3'>
        <Link to={'./gallery'}>Gallery</Link>
        </div>
        <div className='d4'>
        <Link to={'./count'}>Count</Link>
        </div>
        <div className='d4'>
        <Link to={'./ttt'}>Tic Tac Toe</Link>
        </div>
    </div>
  )
}

export default Navbar