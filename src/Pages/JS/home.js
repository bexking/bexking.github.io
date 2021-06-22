import React from 'react'
import '../CSS/home.css';

import Me from '../../Assets/self.png'
import IBHero from '../../Assets/ib-hero.png'
import ProjectGrid from '../../Components/JS/projectgrid.js'
import Nav from '../../Components/JS/nav2.js'
import ContactFooter from '../../Components/JS/contact-footer'


export default function Home() {
    return (
        <div>

            <Nav />

            <div className="intro">
                <div className="intro-text">
                    <h1 className="homeh1">Kia Ora!</h1>
                    <h2 className="homeh2">I'm Bex King</h2>
                    <h3 className="homeh3">UX/UI Designer</h3>
                </div>
                <img id="me" src={Me} alt="illustration of Bex" />
            </div>

            <div className="grid">

            <div></div>

                <div className="homepage">
                    <h2 className="homeh2">About me</h2>
                    <p>
                        Ko Rebecca tōku ingoa. He kaihoahoa ahau no Te Whanganui-a-Tara. <br/>
                        My name is Rebecca. I'm a Designer from Wellington.
                    </p>
                    <p> I'm a recent Interaction Design grad, and a former Visual Merchandiser with a bunch of management experience.</p> 
                    <p>I'm analytical, inquisitive, logical and whimsical. I love UX Design and research because I love gathering and considering tons of information to help solve problems.</p>
                    <p>In my retail visual merchandising career, I would approach problems in store displays and layouts by observing customer interactions with the displays, making changes based on what I saw. Afterwards, I loved checking the stats and listening to staff feedback to make small improvements until we got it right. <br/>
                        When I learned UX Design was in 2017, I was inspired to go and study ASAP, so I could combine the problem-solving approach I'd naturally come to with my love of technology.
                    </p>
                    <p>
                        In my spare time I love knitting and crocheting, learning Te Reo, learning all about freshwater fish, and trying to garden.
                    </p>            
                    <p>Check out my work and contact me at bexkingdesign@gmail.com</p>            
                </div>

                <div id="workworkwork">
                    <h2 className="homeh1" id="work">My Work</h2>
                </div>
            </div>

            <ProjectGrid />
            
            {/* <div className="footer">
                
            </div> */}

            {/* <Sidebar /> */}
            <ContactFooter />
        </div>
    )
}
