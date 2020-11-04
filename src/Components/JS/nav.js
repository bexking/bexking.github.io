import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to="/home" id="ingoa">Rebecca King</Link>
                {/* <Link to="/work">Work</Link> */}
                <div>
                    <Link to="/about" className="nav-places">Work</Link>
                    <Link to="/about" className="nav-places">About</Link>
                </div>
                
            </nav>
        </div>
    )
}
