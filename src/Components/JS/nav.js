import React from 'react'
import { Link } from "react-router-dom";
import '../../Pages/CSS/home.css';

export default function Sidebar() {
    const toggleDropdown = (e) => {
        let dropdown = document.getElementsByClassName("dropdownContent")[0];
        if (!dropdown.classList.contains("visibleContainer")) {
            dropdown.classList.add("visibleContainer");
        } else {
            dropdown.classList.remove("visibleContainer");
        }
    }

    return (
        <div className="sidebar">
            <Link to="/home" className="name">
                <h1 className="nameText">Bex King</h1>
            </Link>
            <h2 className="discipline">UX/UI Design</h2>
            <div className="nav">
                <div className="dropdownContainer">
                    <h3 onClick={toggleDropdown}>projects</h3>
                    <div className="dropdownContent">
                        <h4>UX/UI</h4>
                        <div className="designType">
                            <Link to="/incognitobreathing" className="projectLink">Incognito Breathing</Link>
                        </div>
                        <div className="designType">
                            <Link to="/takeoutdome" className="projectLink">MindFull Dome</Link>
                        </div>
                        <div className="designType">
                            <Link to="/hintswithengoo" className="projectLink">Hints with Engoo</Link>
                        </div>
                        <div className="designType">
                            <Link to="/dreamyfinder" className="projectLink">Animal Crossing Dreamy Finder</Link>
                        </div>
                        <h4>Other Work</h4>
                        <div className="designType">
                            <Link to="/shakemojispeare" className="projectLink">Shakemojispeare</Link>
                        </div>
                        <div className="designType">
                            <Link to="/displacement" className="projectLink">Displacement</Link>
                        </div>
                    </div>
                </div>
                <Link to="/about" className="navItem">about</Link>
            </div>
        </div>
    )
}
