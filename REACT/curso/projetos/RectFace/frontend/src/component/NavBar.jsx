import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs";

//hocks
import { useState } from 'react';
import { useAuth } from '../hook/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//redux
import { logout, reset } from '../slices/authSlice';


const NavBar = () => {
    const { auth } = useAuth();
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispath = useDispatch()

    const handleLogout = () => {
        dispath(logout())
        dispath(reset())
        navigate("/login")
    }
    console.log("auth" + auth)

    return (
        <nav className={styles.navbarcontainer}>
            <NavLink to="/" className={styles.navlink}>
                Face-<span>Face</span>
            </NavLink>
            <ul className={styles.NavBarStyle}>
               {auth ? 
               (<>
                <NavLink to = "/">
                    <BsHouseDoorFill/>
                </NavLink> 
                {user && (
                    <li>
                        <NavLink to = {`users/${user._id}`}>
                            <BsFillCameraFill/>
                        </NavLink>
                    </li>
                )}
                <li>
                    <NavLink to = "/profile">
                        <BsFillPersonFill/>
                    </NavLink>
                </li>
                <li>
                    <span onClick={handleLogout}>Sair</span>
                </li>
               </>) : 
               (<>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? styles.actived : styles.navlink
                        }>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? styles.actived : styles.navlink
                        }>
                        Register
                    </NavLink>
                </li>
               </>) }
            </ul>
        </nav>
    );
};

export default NavBar;
