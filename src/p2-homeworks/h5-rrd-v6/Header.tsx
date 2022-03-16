import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
    position: relative;
    left: -200px;
    width: 100px;
    height: 50px;
    margin-top: 5px;
    transition: left .2s linear;
  &:hover {
    left: 0px;
  }
  a {
    padding: 5px;
  }
`

function Header() {
    return (
        <StyledHeader>
            <NavLink to={'/pre-junior'} style={({isActive}) => ({color: isActive ? "gold" : "white"})}>
                PreJunior
            </NavLink>
            <NavLink to={'/junior'} style={({isActive}) => ({color: isActive ? "gold" : "white"})}>
                Junior
            </NavLink>
            <NavLink to={'/junior-plus'} style={({isActive}) => ({color: isActive ? "gold" : "white"})}>
                Junior+
            </NavLink>
            <span>Menu</span>
        </StyledHeader>
    )
}

export default Header
