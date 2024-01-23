import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';
import Me from '../../Assets/self.png'

export default function Nav() {
    return (
        <div id="main-nav">
            <nav>
                <div className="nav-pages">
                    <Link to="/home" className="nav-places">Home</Link> 
                    <Link to="/work" className="nav-places">Work</Link>
                    <Link to="/about" className="nav-places">About</Link>
                </div>
            </nav>
        </div>
    )
}
