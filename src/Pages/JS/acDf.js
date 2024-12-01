import React from 'react'
import '../CSS/projectPage.css';
import DfPrototype from '../../Assets/df-images/df-prototype.mp4';
import DfHero from '../../Assets/df-images/df-hero-wide1.png';
import ContactFooter from '../../Components/JS/contact-footer.js';

export default function AcDf() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>University project</span>
                        <h1 className='long-project-title'>Dreamy Finder: Helping Animal Crossing players find their favourite neighbours</h1>
                        <p className='type-of-work'>UX/UI, Web design, Web development </p>
                        <p>
                            In Animal Crossing: New Horizons, players live on an island with up to 10 anthropomorphic neighbours. 
                            Many players have favourite neighbours (dreamies) to find for their town out of 400+ characters. 
                            During COVID-19 lockdowns a trend emerged where players would try to find their favourite character in one session, accumulating hard-earned in-game tickets to visit mystery islands, where one random character would wait per trip. 
                            Many players were shocked to spend 1000s of tickets without finding their dreamy.
                        </p>

                        <p>
                            Dataminers discovered encounters with villagers aren't true random. Because the odds and strategies aren't obvious, I wanted to create a simple tool to show the estimated number of tickets to find a dreamy within different parameters to help players plan.
                        </p>
                        <p>Watch the video below or try <a href="http://bexking.github.io/acnh-dreamy-finder" target="_blank" className='external-link'>Dreamy Finder</a>. </p>
                    </div>

                    <div className="hero-two-thirds">
                        <img id="test-image1" className="hero-image" src={DfHero} alt="Green Imac with dreamy finder selection screen on teal background" />
                    </div>
                </div>
                <div className='full-width-content-block'>
                    <div className="video-section">
                        <video className="vid" controls muted playsInline >
                            <source src={DfPrototype} type="video/mp4" />
                        </video>
                    </div>
                </div>  
            </div>
            <ContactFooter />
        </div>
            )
}