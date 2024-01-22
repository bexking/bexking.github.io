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
                    <h2 className="homeh2">Ko Bex King ahau</h2>
                    <h3 className="homeh3">Multi-disciplinary designer all about pain-free digital experiences and robust research.</h3>
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            {/* <div className="homepage">
                <p className="homepage-p">I’m currently a Kaitātai (Designer) at ThinkPlace, a for-purpose design consultancy based in Te-Whanganui-a-Tara.</p>
                <p className="homepage-p">
                    I love using design to create better, more inclusive experiences for people, especially those who are often overlooked. I believe empathy and open-mindedness are crucial to getting to the root of a problem, and support finding the best solutions.
                </p>
                <p className="homepage-p">
                    Before working for ThinkPlace, I worked a Visual Merchandising Co-ordinator for LUSH Fresh Cosmetics Australia & NZ, where I found my passion for design thinking. I hold a Bachelor of Design Innovation from Victoria University of Wellington, majoring in Interaction Design.
                </p>


                <p className="homepage-p">
                    When I’m not designing, I can be found out at gigs, or at home, knitting, reading, or learning raranga (weaving) or Te Reo Māori. 
                </p>             
                <p className="homepage-p">Check out my <Link to="#workworkwork" className="homepage-links"  id="homepage-link1">work</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links" id="homepage-link2">bexkingdesign@gmail.com</a>. </p>
                <p className="homepage-p">Ngā mihi nui</p>
            </div> */}
{/* 
            <div id="workworkwork">
                <h2 className="home-work" id="work">My Work</h2>
            </div> */}

            <ProjectGrid />
        </div>
    )
}
