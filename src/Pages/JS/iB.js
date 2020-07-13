import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'
import IBvid from '../../Assets/ib-video.mp4';

export default function IncognitoBreathing() {
    return (
        <div className="page">
            {/* <Home /> */}
           
            <Sidebar />
           
            
            <div className="content">
                <h1 className="projectTitle">Incognito Breathing</h1>
                <p>An unobtrusive paced respiration tool to help reduce stress and anxiety in 
time-pressured open-plan office spaces.</p>
                <video className='heroVid' autoPlay loop muted>
                    <source src={IBvid} type='video/mp4' />
                </video>
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
