import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';
import Me from '../../Assets/self.png'
import Bg from '../../Assets/bg.png';


export default function Nav() {
    return (
        <div>
            <nav>
                <div className="home-nav">
                    <Link to="/home" id="home">
                        <img id="me-sml" src={Me} alt="illustration of Bex" />
                    </Link> 
                </div>
                <div className="nav-pages">
                    <Link to="/work" className="nav-places">Work</Link>
                    <Link to="/about" className="nav-places">About</Link>
                </div>
                
            </nav>
        </div>
    )
}
