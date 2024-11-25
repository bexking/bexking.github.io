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
                    {/* <Link to="/contact" className="nav-places">Contact</Link> */}
                </div>
            </div>
        </nav>
       
    )
}
