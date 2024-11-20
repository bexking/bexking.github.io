import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/home.css';
import WavesFooter from "../../Assets/waves.svg";

export default function Home() {
    return(
        <div id="top">
            <div className="intro">
                <div id='intro-text-container'>
                    <p className="intro-text">
                        Multi-disciplinary designer who loves problems and loves finding solutions even more. 
                    </p>
                    <Link to="/work" id="home-cta">See my work&emsp;🡪&nbsp;</Link>
                </div>
                
            </div>
             <img className="wavefooter" id="home-fixed" src={WavesFooter} alt="dark brown wave pattern" />
        </div>
    )
}
 