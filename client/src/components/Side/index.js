import "./side.css";
import "./nav.css";
import logo from "../../assets/euphoria.PNG"

import React from 'react';
import { Link } from "react-router-dom";

function Side() {

    function collapseNav() {
        var links = document.querySelector("#nav-check");
        var openSidebarMenu = document.getElementById("openSidebarMenu");

        if(links.checked === false && openSidebarMenu.checked === true) {
            openSidebarMenu.checked = false;
        }
    }

    function collapseSide() {
        var links = document.querySelector("#nav-check");
        var openSidebarMenu = document.getElementById("openSidebarMenu");

        if(links.checked === true && openSidebarMenu.checked === false) {
            links.checked = false;
        }
    }

    return (
        <div>
            <div className="nav" id="nav">
            <input type="checkbox" id="nav-check"></input>
            <div className="nav-header">
                <div className="nav-title">
                
                </div>
            </div>
            <div className="nav-btn" id="navBtn" onClick={collapseNav}>
                <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div className="nav-links" id="navLinks">
                <Link id="logoA" to="/"><span id="logoSpan"><img id="logo" src={logo} alt="logo"></img></span></Link>
                <Link to="/technologies">technologies</Link>
                <Link to="/companies">companies</Link>
                <Link to="/servicenow">servicenow</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </div>
            </div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label onClick={collapseSide} htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                <li>Armando Osorio<span>Web Developer</span></li>
                <li><a href="https://vanila.io" rel="noreferrer">company</a></li>
                <li><a href="https://instagram.com/plavookac" target="blank" rel="noreferrer">instagram</a></li>
                <li><a href="https://twitter.com/plavookac" target="blank" rel="noreferrer">twitter</a></li>
                <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="blank" rel="noreferrer">youtube</a></li>
                <li><a href="https://www.linkedin.com/in/plavookac/" target="blank" rel="noreferrer">linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Side;