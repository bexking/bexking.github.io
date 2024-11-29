import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';
import Logo from '../../Assets/home13.svg'

export default function Nav() {
    const [showBurger, setBurger] = useState(false);

    const links = <>
        <Link to="/work" id="nav-places" className='large-link'>Work</Link>
        <Link onClick={() => setBurger(!showBurger)} to="/about" id="nav-places" className='large-link'>About</Link>
        <Link onClick={() => setBurger(!showBurger)} to="/contact" id="nav-places" className='large-link'>Contact</Link>
    </>;

    return (
        <nav id="main-nav">
            <div id="nav-contents">
                <Link to="/home"><img className="nav-logo" src={Logo} alt="logo saying Bex King"/></Link>
                <div className="nav-pages"> 
                    {links}
                </div>
            </div>

            <div id='hamburger-nav'>
                <Link to="/home"><img className="nav-logo" src={Logo} alt="logo saying Bex King"/></Link>
                <svg onClick={() => setBurger(!showBurger)} id="hamburger" viewBox="0 0 100 80" width="30" height="40">
                    <rect width="100" height="10" rx="8"></rect>
                    <rect y="30" width="100" height="10" rx="8" id="mid-bar"></rect>
                    <rect y="60" width="100" height="10" rx="8"></rect>
                </svg>
            </div>

            {showBurger && <div id="hamburger-list">
                {links}
                <div id="home-wave">
                    <svg id="wave1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>}

        </nav>
    )
}
