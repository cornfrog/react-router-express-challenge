import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBarDropdown = (props) => {
    const projectNames = props.projects
    const menu = projectNames.map((name) => {
        return <li>{name}</li>
    })
    return(
        <ul>
            {menu}
        </ul>   
    )
}

export default NavBarDropdown;