import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'

export default function Displacement() {
    return (
        <div className="page">
            {/* <Home /> */}
           
            <Sidebar />
           
            
            <div className="content">
                <h1 className="projectTitle">Displacement</h1>
                <p>A photography project to draw attention the threat of sea level rise from man-made climate change.</p>
                
                <div className="heroImage">
                    <div className="hero-image" id="displace1"></div>
                </div>
                <div className="heroImage">
                    <div className="hero-image" id="displace2"></div>
                </div>
                <div className="heroImage">
                    <div className="hero-image" id="displace3"></div>
                </div>
                <div className="heroImage">
                    <div className="hero-image" id="displace4"></div>
                </div>
                <div className="heroImage">
                    <div className="hero-image" id="displace5"></div>
                </div>
                <div className="heroImage">
                    <div className="hero-image" id="displace6"></div>
                </div>

                <div className="features">
                    <h3>Design Features</h3>
                    <p>This is a short blurb giving a quick intro to the project</p>
                </div>
                <div className="problem">
                    <h3>Background</h3>
                    <p>This is a short blurb giving a quick intro to the project</p>
                </div>
                <div className="process">
                    <h3>Design Process</h3>
                    <p>This is a short blurb giving a quick intro to the project</p>
                </div>
                <div className="finalImages">
                    <div className="final-images" id="fin1"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
            </div>
        </div>
    )
}
