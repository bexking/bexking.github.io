import React from 'react';
import '../CSS/projectgrid.css';
import { Link } from "react-router-dom";

// import IB from '../../Assets/ib-hero.png'
// import Displacement from '../../Assets/dis1.jpg' 
// import AC from '../../Assets/dreamy-finder.png'
// import Dome from '../../Assets/dome.jpg'
// import CN from '../../Assets/cn-logo.png'
// import Emoji from '../../Assets/emojitranslate.png'


export default function ProjectGrid() {
    return (
        
        <div className="projectGrid">
            
            {/* <img src={IB} alt="Incognito Breathing" className="hero-image"/>
            <img src={Displacement} alt="Displacement Project" className="hero-image"/>
            <img src={AC} alt="Animal Crossing Dreamy Finder" className="hero-image"/>
            <img src={Dome} alt="Dome Takeaway Container" className="hero-image"/>
            <img src={CN} alt="CookNook Logo" className="hero-image"/>
            <img src={Emoji} alt="Emoji-Translate Site" className="hero-image"/> */}

            <div className="hero-image" id="hints">
                <Link to="/hintswithengoo" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Hint System with Engoo</h3>
                        <h4>UX/UI/Product Design</h4>
                        <p className="home-caption">A new solution to provide hints to language learners on the Engoo Platform.</p>
                    </div>
                </Link> 
            </div>
            
            <div className="hero-image" id="ib">
                <Link to="/incognitobreathing" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Incognito Breathing</h3>
                        <h4>UX/UI</h4>
                        <p className="home-caption">A website to help open-plan office workers destress through paced respiration techniques.</p>
                    </div>
                </Link>
            </div>
            
            {/* <div className="hero-image" id="displace">
                <Link to="/displacement" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Displacement</h3>
                        <h4>Photography</h4>
                        <p className="home-caption">Using photography and storytelling to draw attention to sea level rise due to man-made climate change, and the impacts this could have on housing.</p>               
                    </div>
                </Link> 
            </div> */}

            <div className="hero-image" id="ac">
                <Link to="/dreamyfinder" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Dreamy Finder</h3>
                        <h4>Web Design</h4>
                        <p className="home-caption">A tool to help Animal Crossing:New Horizons players work out the likelihood of finding their favourite characters in-game.</p>
                    </div>
                </Link>
            </div>

            <div className="hero-image" id="dome">
                <Link to="/dome" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Dome Takeaway Container</h3>
                        <h4>UX/Psychology</h4>
                        <p className="home-caption">Rethinking the humble takeaway container to help manage portion-control.</p>
                    </div>
                </Link>    
            </div>

            <div className="hero-image" id="cn">
                <Link to="/cooknook" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">CookNook Recipe Manager</h3>
                        <h4>UX/UI, Graphic Design</h4>
                        <p className="home-caption">A space to save and share your favourite recipes, as well as discover new ones.</p>
                    </div>
                </Link>    
            </div>

            <div className="hero-image" id="emoji">
                <Link to="/shakemojispeare" className="projectLink">
                    <div className="title">
                        <h3 className="homeTitle">Shakemojispeare</h3>
                        <h4>Web Design</h4>
                        <p className="home-caption">A somewhat silly website that lets you turn Shakespearian text into Emoji-pasta.</p>
                    </div>
                </Link>    
            </div>
                 
        </div>
    )
}
