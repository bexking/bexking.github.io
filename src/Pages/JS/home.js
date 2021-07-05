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
                <p>I like UX design, research, analysing information, questioning assumptions, drawing unflattering portraits, knitting, rollerskating, colour, goldfish, </p>         
                <p>Check out my <Link to="#workworkwork">work</Link> learn more <Link to="#about">about me</Link> and get in touch at bexkingdesign@gmail.com</p>
            </div>

            <div id="workworkwork">
                <h2 className="homeh1" id="work">My Work</h2>
            </div>

            <ProjectGrid />
            <ContactFooter />
        </div>
    )
}
