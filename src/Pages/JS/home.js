import React from 'react'
import '../CSS/home.css';
import Sidebar from '../../Components/JS/nav.js'
import Me from '../../Assets/self.png'
import IBHero from '../../Assets/ib-hero.png'
import ProjectGrid from '../../Components/JS/projectgrid.js'
import Nav from '../../Components/JS/nav.js'


export default function Home() {
    return (
        <div>

            <Nav />

            <div className="intro">
                <div>
                    <h1 className="homeh1">Kia ora!</h1>
                    <h2 className="homeh2">I'm Bex King</h2>
                    <h3 className="homeh3">UX/UI Designer</h3>
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            <div className="grid">

            <div></div>

                <div className="homepage">
                    <h2 className="homeh2">About me</h2>
                    <p>Ko Rebecca ahau.</p>
                    <p>I'm a UX/UI designer of Ngati Porou and European descent living in Te Whanganui-a-Tara (Wellington).</p> 
                    <p>I have recently completed a Bachelor of Design Innovation in Interaction Design at Te Herenga Waka/Victoria University of Wellington. </p>
                    <p>I love creating products and systems that are grounded in research and have logical flows.</p>
                    <p>I love problems that are a bit messy and have a lot of complexity to them.</p>
                    <p>Though I love to be practical, I also like to add joy and elements of surprise.</p>
                    <p>I love to break open a brief, set assumptions aside and find the root of a problem, before creatively solving it.</p>            
                    <p>Check out my work and contact me at bexkingdesign@gmail.com</p>            
                </div>

                <div></div>

                <div id="workworkwork" className="homepage">
                    <h2 className="homeh2" id="work">See my work</h2>
                </div>
            </div>

            <ProjectGrid />
            
            <div className="footer">
                
            </div>

            {/* <Sidebar /> */}
        </div>
    )
}
