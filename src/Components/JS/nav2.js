import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';
import Logo from '../../Assets/home13.svg'

export default function Nav() {
    return (
        <nav id="main-nav">
            <div id="nav-contents">
                <Link to="/home"><img className="nav-logo" src={Logo} alt="logo saying Bex King"/></Link>
                <div className="nav-pages"> 
                    {/* <Link to="/work" id="nav-places" className='large-link'>Work</Link> */}
                    <Link to="/about" id="nav-places" className='large-link'>About</Link>
                    <Link to="/contact" id="nav-places" className='large-link'>Contact</Link>
                </div>
            </div>

            <div id='hamburger-nav'>
                <svg id="hamburger" viewBox="0 0 100 80" width="30" height="40">
                    <rect width="100" height="10" rx="8"></rect>
                    <rect y="30" width="100" height="10" rx="8"></rect>
                    <rect y="60" width="100" height="10" rx="8"></rect>
                </svg>
            </div>
        </nav>

        
        
       
    )
}
