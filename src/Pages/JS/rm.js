import React from 'react'
import '../CSS/rm.css';
import '../CSS/projectPage.css';
import SeeMore from "../../Components/JS/see-more.js";
import RmHero from '../../Assets/rm-images/rm-main.jpg';
import RmMatConcept from '../../Assets/rm-images/rm-concept.png';
import RmAppConcept1 from '../../Assets/rm-images/rm-app1.png';
import RmAppConcept2 from '../../Assets/rm-images/rm-app2.png';
import RmProcess3 from '../../Assets/rm-images/rm-process3.jpg';
import RmProcess4 from '../../Assets/rm-images/rm-process4.jpg';
import RmProcess5 from '../../Assets/rm-images/rm-process5.jpg';
import RmProcess6 from '../../Assets/rm-images/rm-process6.jpg';
import RmProcess7 from '../../Assets/rm-images/rm-process7.jpg';
// import RmProcess8 from '../../Assets/rm-images/rm-process8.jpg';
import RmPostman from '../../Assets/rm-images/rm-postman.jpg';
import RmProcess9 from '../../Assets/rm-images/rm-process9.jpg';
import RmProcess10 from '../../Assets/rm-images/rm-process10.jpg';
import RmProcess11 from '../../Assets/rm-images/rm-process11.jpg';
import RmProcess12 from '../../Assets/rm-images/rm-process12.jpg';
import RmHardware from '../../Assets/rm-images/rm-hardware.jpg';
import RmCardboard from '../../Assets/rm-images/rm-cardboard.jpg';
import RmFoamboard1 from '../../Assets/rm-images/rm-foamboard1.jpg';
import RmFoamboard2 from '../../Assets/rm-images/rm-foamboard2.jpg';
import RmVideo from "../../Assets/rm-images/rm-vid.mp4";

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
                        This project was the result of a challenge to come up with a mixed reality design - mixing the physical and digital world, and create a prototype/proof of concept.
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
            
                <div id="rm-hmw">
                    <h3 className="rm-h3">How might we use a mixed reality approach to help people with working memory difficulties remember the things they need to take with them when they leave the house?</h3>
                </div>

                <div className="written-content">
                    <h2>The Concept</h2>
                    <div className="rm-concept-cont">
                        <div>
                            <p>I explored different options relating to adding memory triggers into the daily routine so the user can re-access tasks that have gone into long term memory.</p>
                            <p>The solution I settled on was a mixed-reality doormat that when stepped on prompts your to do list to send a notification to your phone (or possibly smart watch).</p>
                        </div>
                        <img id="mat-concept" src={RmMatConcept} alt="Diagram showing hardware concept - a person stands on a mat, the step is recognised by a sensor connected to a raspberry pi. The raspberry pi is programmed to send a push notification to your phone which is connected to a to-do app" />
                    </div>
                    <div className="rm-reqs-cont">
                        <div className="app-concepts">
                            <img className="app-concept" src={RmAppConcept1} alt="A simple to do list app" />
                            <img className="app-concept" src={RmAppConcept2} alt="A simple to do list app with one task swiped to reveal delete button" />
                        </div>
                        <ul className="rm-reqs">
                            <h4>The app should be...</h4>
                            <li className="rm-li">Simple - in design and use.</li>
                            <li className="rm-li">Quick to use throughout the day.</li>
                            <li className="rm-li">There should be a wide range of notification options to suit any sensory issues neurodivergent users may have.</li>
                            <li className="rm-li">Built using React</li>
                        </ul>
                    </div>
                </div>

                <div className="written-content">
                    <h2>Prototyping - Hardware</h2>
                    <p>I researched what hardware I would need to build the prototype as I had never used a Raspberry Pi or similar technology before. </p>
                    <div className="hardware">
                        <ul className="hardware-list">
                            <h4>Hardware used:</h4>
                            <li className="rm-li">Raspberry Pi B</li>
                            <li className="rm-li">SD Card</li>
                            <li className="rm-li">Wifi Dongle for Raspberry Pi internet connection</li>
                            <li className="rm-li">Solderless Breadboard</li>
                            <li className="rm-li">Pressure Sensor</li>
                            <li className="rm-li">Resistor</li>
                            <li className="rm-li">Android Phone to install the app on & receive    notifications</li>
                        </ul>
                        <img id="rm-hardware" src={RmHardware} alt="An android phone, and a raspberry pi connected to a small pressure sensor" />
                    </div>
                    <p>I coded the Raspberry Pi to read the pressure sensor values, communicate this change in state, and then make some sort of output - initially printing     the information to the screen. This formed the foundation of code that I could manipulate more specifically later. </p>
                    <div className="pi-process-container">
                        <img className="pi-process" src={RmProcess3} alt="Notes from my workbook - learning how to use the code editor to program the raspberry pi" />
                        <img className="pi-process" src={RmProcess4} alt="Notes from my workbook - breaking down the idea into steps - identifying that the code needs to get the input, process the information and then send an output." />
                        <img className="pi-process" src={RmProcess5} alt="Notes from my workbook - learning some of the commands needed to code in python." />
                        <img className="pi-process" src={RmProcess6} alt="Notes from my workbook - breaking down the idea into steps - showing a photo of my code displayed on a tv doing some debugging to get the simple program to work." />
                    </div>


                    <h2>Prototyping - Software</h2> 
                    <p>
                        I decided to build a progressive web app, as I could use React which I was familiar with.
                        A progressive web app is a website that you can add to homescreen with an app logo, and can be coded to receive push notifications. 
                    </p>
                    <p>
                        Due to time constraints for this project, I used a placeholder page within the app, rather than building a functioning to do list. This allowed me to create proof of concept for the mat/push notification interaction - which is the heart of the experience.
                    </p>
                    <p>To create the progressive web app I used Firebase, and used Postman to send the push notifications.</p>
                    <div className="app-process-container">
                        <img className="app-process" src={RmProcess7} alt="Notes from my workbook - figuring out hosting with firebase" /> 
                        <img className="app-process" src={RmProcess9} alt="Notes from my workbook - working on adding the progressive web app to my phone homescreen" />
                        <img className="app-process" src={RmPostman} alt="Notes from my workbook - using postman to create the push notification" />  
                        <img className="app-process" src={RmProcess10} alt="Notes from my workbook - app added to homescreen" /> 
                        <img className="app-process" src={RmProcess11} alt="Notes from my workbook - app added to homescreen" /> 
                        <img className="app-process" src={RmProcess12} alt="Notes from my workbook - the push notification works for the first time." />
                    </div>
                </div>

                <div className="written-content">
                    <h2>Styling the Mat</h2>
                    <p>I had discovered the prototype sensor worked better when it was embedded into cardboard, so I made the prototype mat out of foam board. Ideally a professional version of the remind mat would use a much larger and more responsive sensor, allowing for the mat to be crafted out of more durable materials. </p>
                    <p>Even though the prototype mat was made out of card, I wanted to bring a homewares feel to the prototype, so I used yarn to create a pattern on the mat. </p>
                    <div className="mat-process-container">
                        <img className="app-process" src={RmCardboard} alt="Experimenting with the sensor embedded in a piece of cardboard" /> 
                        <img className="app-process" src={RmFoamboard1} alt="The sensor now sits in plain black foamboard" /> 
                        <img className="app-process" src={RmFoamboard2} alt="Red yarn has been tied to make a criss-cross pattern around the foamboard" /> 
                    </div>
                </div>

                <div className="written-content">
                    <h2>Future Mahi</h2>
                    <ul>
                        <li>Testing and feedback sessions with users for the first prototype</li>
                        <li>Produce a strong to-do app based on user needs</li>
                        <li>Iterating on current concept for the mat, strengthening the materials, visual design and the overall system</li>
                        <li>Devise a way to have multiple users and to do lists in one household.</li>
                        <li>Enhance accessibility options</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                <div className="rm-video-sec">
                    <h3 className="proto-h3">See the prototype</h3>
                    <div className="ib-hero-container">
                        <div className="rm-video-sec">
                            <video className="vid" muted controls playsInline>
                                <source src={RmVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            
            </div>
            <SeeMore project1={"ib"} project2={"hints"}/>
        </div>
    )
}