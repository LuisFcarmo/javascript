import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to = '/' className = "la">home</NavLink>
            <NavLink to = '/about' className = "la">about</NavLink>
            <NavLink to = '/more' className = "la">more</NavLink>
        </nav>
    </div>
  )
}

export default NavBar