import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/home.css';
import Me from '../../Assets/self.png'
import ProjectGrid from '../../Components/JS/projectgrid.js'


export default function Home() {
    return (
        <div id="top">
        
            <div className="intro">
                <div className="intro-text">
                    <h1 className="homeh1">Kia Ora!</h1>
                    <h2 className="homeh2">I'm Bex King</h2>
                    <h3 className="homeh3">Interaction Design Graduate</h3>
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            <div className="homepage">
                <p className="homepage-p">Nau mai haere mai ki tāku kohinga hoahoa whaiaro - welcome to my design portfolio.</p>
                <p className="homepage-p"> I'm  a former Retail Visual Merchandiser turned Interaction Design Graduate.</p>   
                <p className="homepage-p">
                    As a designer I like trying to understand and resolve messy problems, getting to know people and finding out what makes people tick, and designing solutions to meet their needs. I love analysing information, spotting trends and trying to come up with holistic solutions that work for real people.
                    A lot of my design work has been digital and web-based, but with my visual merchandising background I can adapt a design-thinking approach to a wide range of situations and solutions.
                </p>         
                <p className="homepage-p">Outside of work you'll find me at home knitting, reading, learning Te Reo Māori, or out seeing live music.</p>
                <p className="homepage-p">Check out my <Link to="#workworkwork" className="homepage-links"  id="homepage-link1">work</Link> learn more <Link to="#about" className="homepage-links" id="homepage-link2">about me</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links" id="homepage-link3">bexkingdesign@gmail.com</a></p>
                <p className="homepage-p">Kia ora rā.</p>
            </div>

            <div id="workworkwork">
                <h2 className="home-work" id="work">My Work</h2>
            </div>

            <ProjectGrid />
        </div>
    )
}
