import React from 'react'
import '../Nav/nav.scss'

import { NavLink } from 'react-router-dom'

const Nav = () => {


    return (
            <ul className="navList">
                <NavLink to="/" exact>
                    <li  activeclassname="active">Home</li>
                </NavLink>
                <NavLink to="/fetchApi">
                    <li  activeclassname="active">Covid VN</li>              
                </NavLink>
                <NavLink to="/todo">
                    <li  activeclassname="active">TodoList</li>                
                </NavLink>
                <NavLink to="/countdown">
                    <li  activeclassname="active">Countdown</li>                 
                </NavLink>
                <NavLink to="/more">
                    <li  activeclassname="active">More</li>     
                </NavLink>
            </ul>
        
    )
}

export default Nav
