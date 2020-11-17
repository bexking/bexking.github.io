import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/nav.css';
import Me from '../../Assets/self.png'

export default function Nav() {
    return (
        <div>
            <nav>
                <div className="nav-rebeccaahau">
                     
                    <Link to="/home" id="ingoa">
                        <img id="me-sml" src={Me} alt="illustration of Bex" />
                    </Link> 
                </div>
                <div>
                    <Link to="/about" className="nav-places">Work</Link>
                    <Link to="/about" className="nav-places">About</Link>
                    </div>
                
            </nav>
        </div>
    )
}
