import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className='footer__links'>
        <li><Link className='footer__link' to='/'>Home</Link></li>
        <li><Link className='footer__link' to='/contact'>Contact</Link></li>
        <li><Link className='footer__link' to='/about'>À propos</Link></li>
      </ul>
    </footer>
  )
}
