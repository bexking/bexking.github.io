import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'
import IBvid from '../../Assets/ib-video.mp4';
import IbIt1 from '../../Assets/ib-it1.mp4';
import IbIt2 from '../../Assets/ib-it2.mp4';
import IbIt3 from '../../Assets/ib-it3.mp4';
import IbIt4 from '../../Assets/ib-it4.mp4';
import IBshort from '../../Assets/ib-short.mp4';
import IBinfog from '../../Assets/ib-infog.png'



export default function IncognitoBreathing() {
    return (
        <div className="page">
            {/* <Home /> */}
           
            <div className="content">
                <h1 className="projecth1">Incognito Breathing</h1>
                <p>An unobtrusive paced respiration tool to help reduce stress and anxiety in 
time-pressured open-plan office spaces.</p>
                <video className='heroVid' autoPlay loop muted controls>
                    <source src={IBvid} type='video/mp4' />
                </video>
                <div className="features">
                    <h3 className="projecth3">Design Features</h3>
                    <p>Incognito Breathing is a web-based product that lets you upload a screenshot of your digital workspace, and generates a subtle visualisation to assist paced respiration for two minutes.</p>
                    <p>Once the visualisation is generated, make the window fullscreen and breathe in time with the bubble as it tracks across the screen. </p>
                    <p>Use the visualistion with relaxing sounds such as ocean waves, or just keep it on silent if that's more your style.</p>
                    <p>There have been many studies on inhale/exhale ratios, but there is no conclusive best ratio yet, so Incognito Breathing uses a steady 3s inhale, 3s exhale, which is recommended by many psychologists to help reset your breath pace.</p>
                    <div>
                        <div className="hero-image" id="ibHero"></div>
                    </div>
                    <video className='heroVid' autoPlay loop muted>
                    <source src={IBshort} type='video/mp4' />
                </video>
                </div>
                <div className="problem">
                    <h3 className="projecth3">Background</h3>
                    <p>This project was inspired by psychology findings that office-workers are becoming increasingly time-pressured, and that workers reported more stress in a 10 year period. Attempts to alleviate stress through multi-tasking during relaxation time have been found to create even more stress. The best way to help relieve stress is to have moments where you stop, but employees in open-plan offices can find it difficult to do so in their workplace.</p>
                    <p>Paced resipration can help relieve stress symptoms. Changing the pace of your breath, and inhaling regularly rather than taking big gasps can help to slow your heart rate, and regulate the amount of oxygen your brain receives, lowering stress levels.</p>
                    <p> The goal was to create a product that will help office workers find moments of relaxation and manage stress in the workplace, by adding paced breathing techniques into daily routines.</p>
                </div>
                <div className="process">
                    <h3 className="projecth3">Design Process</h3>
                    <p>Following a lot of research about stress in office environments, and coming up with different concepts, I settled on the idea of a paced respiration tool that would look like your workspace, so you could comfortably use it within the office. Users could upload a screenshot of their digital workspace to the website, which would overlay a subtle animation for the user to breathe in time with. A lot of the design process consisted of testing different animation styles for subtlety, clarity and rhythm. The style needed to be unobtrusive, and the user needed to be able to comfortably breathe in time with it.</p>
                    <div className="processVids">
                        <video className='processVid' autoPlay loop muted>
                            <source src={IbIt1} type='video/mp4' />
                        </video>
                        <video className='processVid' autoPlay loop muted>
                            <source src={IbIt2} type='video/mp4' />
                        </video>
                    </div>
                    <div className="processVids">
                        <video className='processVid' autoPlay loop muted>
                            <source src={IbIt3} type='video/mp4' />
                        </video>
                        <video className='processVid' autoPlay loop muted>
                            <source src={IbIt4} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <div className="process">
                    <h3 className="projecth3">Testing</h3>
                    <p>The purpose of the testing process was to assess how effectively the visualisation helped users to relax.</p>
                    <p>Participants were tested twice while wearing biofeedback monitors that measured their heart rate. In the first session, participants were asked to complete a time-pressured task, and then the time it took for their heart rate to return to the stating rate was recorded.
                        Participants heart rates were recorded when they arrived, and monitored throughout the rest of the session.
                    </p>
                    <p>In the second session, the same participants were tested, again they needed to complete a time pressured task, but this time they used Incognito Breathing to relax instead.
                        Again, heart rates were recorded at the beginning and monitored throughout the session.
                    </p>

                    <div>
                        <div className="hero-image" id="Test2"></div>
                    </div>

                    <h3 className="projecth3">Results</h3>
                    <p>The purpose of the testing process was to assess how effectively the visualisation helped users to relax.</p>
                    
                </div>

                <div className="infographic-box">
                    <div className="infographic" id="ibInfog"></div>
                </div>
            </div>
        </div>
    )
}
