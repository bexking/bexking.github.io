import React from 'react'
import '../CSS/projectPage.css';
// import Home from './home.js';
import Nav from '../../Components/JS/nav2.js';

export default function Shakespeare() {
    return (
        <div className="page">
            {/* <Home /> */}
            <Nav />
     
            <div className="content">
                <h1 className="projectTitle">Shakemojispeare</h1>
                <p>Shakemojispeare lets you translate Shakespearian passages into emojipasta and back again.
                    This project was inspired by internet culture, and the panic many language-lovers feel when technology starts to encroach on written language.
                </p>
                <div className="heroImage">
                    <div className="hero-image" id="emojitranslate"></div>
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
                    <div className="final-images" id="zine"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
            </div>
        </div>
    )
}
