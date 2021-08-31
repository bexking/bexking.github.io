import React from 'react'
import '../CSS/rm.css';
import '../CSS/projectPage.css';
import SeeMore from "../../Components/JS/see-more.js";
import RmHero from '../../Assets/rm-images/rm-main.jpg';
import RmMatConcept from '../../Assets/rm-images/rm-concept.png';
import RmAppConcept1 from '../../Assets/rm-images/rm-app1.png';
import RmAppConcept2 from '../../Assets/rm-images/rm-app2.png';

export default function Rm() {
    return (
        <div>
            <div className="rm-page page">
                <img id="homepage-hero" src={RmHero} alt="Remind Mat sitting in front of an open sliding door." />
                <h1 class="project-heading" id="rm-heading">Remind Mat</h1>
                <h2 id="rm-subtitle">A doormat to assist people with working memory challenges</h2>
                
                <div className="written-content">
                    <p>
                        The Remind Mat is an interior doormat designed to help people remember the things they need to take with them when they leave the house. 
                    </p>

                    <p>
                        This project was the result of a challenge to come up with a mixed reality design - mixing the physical and digital world.
                        Rather than designing something that was hyper-futuristic, I wanted to come up with something that had the potential to help people everyday. 
                    </p>
                </div>

                <div className="written-content">
                    <h2>The Challenge</h2>
                    <p>
                        A lot of people struggle with working memory issues from time to time. In Psychology First Edition working memory is described as "active information your mind is currently working on. Once the information is no longer being worked on, it must be retrieved from long term memory."
                        Retrieving the information from long-term memory tends to require a promt or trigger to bring it to the forefront of your mind.
                    </p>
                    <p>
                        Working memory struggles are particularly common for neurodivergent people, such as those with ADHD, Autism and Dyslexia.
                        Despite attempts to be organised, they may forget temporarily when there are interruptions, or a lot going on at once. A common problem can be leaving things at home before work, school etc.
                    </p>

                    <p>My mission for this project was to try and find a solution to the below question.</p>
                </div>

                <div id="hmw">
                        <h3>How might we use a mixed reality approach to help people with working memory difficulties remember the things they need to take with them when they leave the house?</h3>
                    </div>
                
                <div className="written-content">
                    <h2>Ideation</h2>
                </div>

                <div className="written-content">
                    <h2>The Concept</h2>
                    <div className="rm-concept-cont">
                        <img id="mat-concept" src={RmMatConcept} alt="Diagram showing hardware concept - a person stands on a mat, the step is recognised by a sensor connected to a raspberry pi. The raspberry pi is programmed to send a push notification to your phone which is connected to a to-do app" />
                        <div className="app-concepts">
                            <img className="app-concept" src={RmAppConcept1} alt="A simple to do list app" />
                            <img className="app-concept" src={RmAppConcept2} alt="A simple to do list app" />
                        </div>
                    </div>
                    <ul>
                        <p>The app should be...</p>
                        <li>Simple - in design and use.</li>
                        <li>Quick to use throughout the day.</li>
                        <li>There should be a wide range of notification options to suit any sensory issues neurodivergent users may have.</li>
                        <li>Built using React</li>
                    </ul>
                </div>

                <div className="written-content">
                    <h2>Building The Prototype</h2>
                    <ul>
                        <p>Hardware used:</p>
                        <li>Raspberry Pi B</li>
                        <li>Wifi Dongle for Raspberry Pi internet connection</li>
                        <li>Pressure Sensor</li>
                        <li>Resistor</li>
                        <li>Android Phone to put the app on and receive the notifications</li>
                    </ul>
                    <p>
                        I decided to build a progressive web app, as I could use React which I was familiar with.
                        A progressive web app is a website that you can add to homescreen with an app logo, and can be coded to receive push notifications. 
                    </p>
                    <p>
                        Due to time constraints for this project, I needed to use a placeholder page within the app, rather than building a functioning to do list. This allowed me to create proof of concept for the mat/push notification interaction - which is the heart of the experience.
                    </p>
                </div>
            </div>
            <SeeMore project1={"ib"} project2={"hints"}/>
        </div>
    )
}