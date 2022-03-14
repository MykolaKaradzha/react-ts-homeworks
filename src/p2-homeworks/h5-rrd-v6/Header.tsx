import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to={'/prejunior'} style={({isActive}) => ({color: isActive ? "gold" : "black"})}>
                PreJunior
            </NavLink>
            <NavLink to={'/junior'} style={({isActive}) => ({color: isActive ? "gold" : "black"})}>
                Junior
            </NavLink>
            <NavLink to={'/junior+'} style={({isActive}) => ({color: isActive ? "gold" : "black"})}>
                Junior+
            </NavLink>
        </div>
    )
}

export default Header
