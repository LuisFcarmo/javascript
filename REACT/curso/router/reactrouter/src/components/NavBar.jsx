import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        {/*
        <Link to = '/'>Home</Link>
        <Link to = '/about'>about</Link> */}
        <NavLink to = '/' className = {({isActive}) => (isActive ? "ativo" : "desativo")}>home</NavLink>
        <NavLink to = '/about' className = {({isActive}) => (isActive ? "ativo" : "desativo")}>about</NavLink>
    </nav>
  )
}

export default NavBar