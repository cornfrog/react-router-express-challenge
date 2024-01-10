import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="site-links">
            <Link to="/" className="home-link">Home</Link>
            <Link to="/resume" className="resume-link">Resume</Link>
            <Link to="/projects" className="projects-link">Projects</Link>
        </div>
    )
}

export default NavBar;