import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/home.css';
import WavesFooter from "../../Assets/waves.svg";

export default function Home() {
    return(
        <div id="top">
            <div className="intro">
                <div id='intro-text-container'>
                    <p className="p-feature">
                        Multi-disciplinary designer who loves problems and loves finding solutions even more. 
                    </p>
                    <Link to="/work" className="large-link">See my work&emsp;&#8594;&nbsp;</Link>
                </div> 
            </div>
            <div id="home-wave">
                <svg id="wave1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}
 