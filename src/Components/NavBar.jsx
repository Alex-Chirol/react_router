import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav'>
        <ul className='nav__links'>
            <li><Link className='nav__link' to='/'>Home</Link></li>
            <li><Link className='nav__link' to='/contact'>Contact</Link></li>
            <li><Link className='nav__link' to='/about'>À propos</Link></li>
        </ul>
    </nav>
  )
}
