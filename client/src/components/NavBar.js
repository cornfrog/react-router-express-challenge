import React, { useState, useEffect } from "react";
import { render } from "react-dom"
import { Link } from "react-router-dom";

import NavBarDropdown from "./NavBarDropdown";

const NavBar = (props) => {
    const projectsFromIndex =  props.test
    const projectNames = projectsFromIndex.map((project) => {
        return project.name
    })
    const showMenu = () => {
        // debugger
        render(
            <NavBarDropdown projects={projectNames}/>,
            document.getElementById("dropdown-menu")
        )
        // debugger
    }
    console.log("Array of Project Names:", projectNames)
    return (
        <div className="site-links">
            <Link to="/" className="home-link">Home</Link>
            <Link to="/resume" className="resume-link">Resume</Link>
            <Link to="/projects" className="projects-link" onMouseOver={showMenu}>Projects</Link>
            <div id="dropdown-menu"></div>
        </div>
    )
}

export default NavBar;