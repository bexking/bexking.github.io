import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/home.css';
import Me from '../../Assets/self.png'
import IBHero from '../../Assets/ib-hero.png'
import ProjectGrid from '../../Components/JS/projectgrid.js'
import ContactFooter from '../../Components/JS/contact-footer'


export default function Home() {
    return (
        <div id="top">
        
            <div className="intro">
                <div className="intro-text">
                    <h1 className="homeh1">Kia Ora!</h1>
                    <h2 className="homeh2">I'm Bex King</h2>
                    <h3 className="homeh3">UX/UI Designer</h3>
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            <div className="homepage">
                <p>Nau mai haere mai, ki taku kohinga hoahoa whaiaro.</p>
                <p>Welcome to my design portfolio. I'm  a former Visual Merchandiser turned Interaction Design Graduate.</p>   
                <p>In work I like getting to the bottom of a problem, finding out what makes people tick, and designing solutions to meet their needs. At home I like knitting, nature, live music and learning languages. </p>      
                <p>My strengths are finding creative solutions to messy problems, analysing situtations and finding trends, and keeping users at the heart of my designs.</p>         
                <p>Check out my <Link to="#workworkwork" className="homepage-links"  id="homepage-link1">work</Link> learn more <Link to="#about" className="homepage-links" id="homepage-link2">about me</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links" id="homepage-link3">bexkingdesign@gmail.com</a></p>
            </div>

            <div id="workworkwork">
                <h2 className="home-work" id="work">My Work</h2>
            </div>

            <ProjectGrid />
        </div>
    )
}
