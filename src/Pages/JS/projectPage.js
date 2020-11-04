import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'

export default function ProjectPage() {
    return (
        <div className="page">
            {/* <Home /> */}
           
           
            
            <div className="content">
                <h1 className="projectTitle">Project Title</h1>
                <p>This is a short blurb giving a quick intro to the project</p>
                <div className="heroImage">
                    <div className="hero-image" id="hero"></div>
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
