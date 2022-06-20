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
                    <h2 className="homeh2">Ko Bex King ahau.</h2>
                    {/* <h3 className="homeh3">Designer</h3> */}
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            <div className="homepage">
                <p className="homepage-p">I'm a Service Designer (and ex retail Visual Merchandiser) in Te-Whanganui-a-Tara (Wellington).</p>
                <p className="homepage-p">
                    I love design that seeks to untangle messy problems, find out what makes people tick, and find practical solutions to meet their needs.
                </p>
                <p className="homepage-p">
                    I have a particular passion for digital design, but I love to use Design Thinking to approach a wide variety of work.
                </p>             
                <p className="homepage-p">Outside of mahi you'll find me at home knitting, reading, learning Te Reo Māori, or out seeing live music.</p>
                <p className="homepage-p">Check out my <Link to="#workworkwork" className="homepage-links"  id="homepage-link1">work</Link> learn more <Link to="#about" className="homepage-links" id="homepage-link2">about me</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links" id="homepage-link3">bexkingdesign@gmail.com</a></p>
                <p className="homepage-p">Ngā mihi.</p>
            </div>

            <div id="workworkwork">
                <h2 className="home-work" id="work">My Work</h2>
            </div>

            <ProjectGrid />
        </div>
    )
}
