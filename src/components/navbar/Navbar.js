import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Icon from '../assets/shopping-bag.png'
import Logo from '../assets/thrift-logo.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left-section'>
                <NavLink to="/"><img src={Logo} className='logo'></img></NavLink>
                <div className='links'>
                    <NavLink to="/all" className='link'>ALL</NavLink>
                    <NavLink to="/mens" className='link'>MENS</NavLink>
                    <NavLink to="/womens" className='link'>WOMENS</NavLink>
                </div>
            </div>
            <div className='right-section'>
                <NavLink to="/about"  className='link'>ABOUT</NavLink>
                <img src={Icon} className='icon'></img>
            </div>
        </nav>
    )
}

export default Navbar