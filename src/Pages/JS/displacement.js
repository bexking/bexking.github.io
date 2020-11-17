import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Nav from '../../Components/JS/nav2.js';


export default function Displacement() {
    return (
        <div className="page">
            {/* <Home /> */}
            <Nav />
            
            <div className="content">
                <h1 className="projecth1">Displacement</h1>
                <p>A photography project to draw attention the threat of sea level rise from man-made climate change.</p>
                
                <div className="heroImage">
                    <div className="dis-hero-image" id="displace1"></div>
                </div>
                <div className="heroImage">
                    <div className="dis-hero-image" id="displace2"></div>
                </div>
                <div className="heroImage">
                    <div className="dis-hero-image" id="displace3"></div>
                </div>
                <div className="heroImage">
                    <div className="dis-hero-image" id="displace4"></div>
                </div>
                <div className="heroImage">
                    <div className="dis-hero-image" id="displace5"></div>
                </div>
            </div>

            <div className="disGrid">
                <div className="hero-image" id="displace1"></div>
                <div className="hero-image" id="displace2"></div>
                <div className="hero-image" id="displace3"></div>
                <div className="hero-image" id="displace4"></div>
                <div className="hero-image" id="displace5"></div>
            </div>

        </div>
    )
}
