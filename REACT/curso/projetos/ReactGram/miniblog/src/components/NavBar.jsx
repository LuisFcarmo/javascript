import React from 'react'
import styles from '../components/NavBar.module.css'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'


import { NavLink } from 'react-router-dom'
const NavBar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    return (
        <nav className=  {styles.NVB}>
                <NavLink to= "/" className={styles.NVBLG}>
                    Mini <span>blog</span>
                </NavLink>
                <ul className= {styles.NVDUL}>
                    <li>
                        <NavLink 
                            to = "/" 
                            className = {({isActive}) => (isActive ? styles.actived :  "")} > Home </NavLink>
                    </li>
                    <li> 
                        <NavLink 
                            to = "/about" 
                            className = {({isActive}) => (isActive ? styles.actived :  "")} > sobre </NavLink>
                    </li>
                    {!user &&(
                        <>
                            <li>
                                <NavLink 
                                    to = "/login" 
                                    className = {({isActive}) => (isActive ? styles.actived :  "")} > Login </NavLink>
                            </li>
                            <li> 
                                <NavLink 
                                    to = "/register" 
                                    className = {({isActive}) => (isActive ? styles.actived :  "")} > Register </NavLink>
                            </li>
                        </>
                    )}
                    {user &&(
                        <>
                            <li>
                                <NavLink 
                                    to = "/posts/create" 
                                    className = {({isActive}) => (isActive ? styles.actived :  "")} > Create-Post </NavLink>
                            </li>
                            <li> 
                                <NavLink 
                                    to = "/dashboard" 
                                    className = {({isActive}) => (isActive ? styles.actived :  "")} > DashBoard </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <button onClick = {logout}>Sair</button>
                        </li>
                    )}
                </ul>
        </nav>
    )
}

export default NavBar