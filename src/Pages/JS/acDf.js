import React from 'react'
import Popup from 'reactjs-popup';
import '../CSS/acDf.css';
import DfJourney1 from '../../Assets/df-images/df-1.jpg';
import DfJourney2 from '../../Assets/df-images/df-2.jpg';
import DfSketch1 from '../../Assets/df-images/df-sk1.jpg';
import DfSketch2 from '../../Assets/df-images/df-sk2.jpg';
import DfSketch3 from '../../Assets/df-images/df-sk3.jpg';
import DfSketch4 from '../../Assets/df-images/df-sk4.jpg';
import DfSketch5 from '../../Assets/df-images/df-sk5.jpg';
import DfSketch6 from '../../Assets/df-images/df-sk6.jpg';
import AcnhMap from '../../Assets/df-images/acnh-map.jpg';
import DfIt1v1 from '../../Assets/df-images/digital-it1.png';
import DfIt1v2 from '../../Assets/df-images/digital-it2.png';
import DfPrototype from '../../Assets/df-images/df-prototype.mp4';
import DfHero from '../../Assets/df-images/df-hero-wide1.png';

export default function AcDf() {
    return (
        <div>
            <div className="df-page">
                <a className="df-link" href="http://bexking.github.io/acnh-dreamy-finder" target="_blank"><img id="df-hero" src={DfHero} alt="Green Imac with dreamy finder selection screen on teal background" /></a>
                <div>
                    <h1 className="project-heading" id="df-heading">Dreamy Finder</h1>
                    <h3 id="df-subtitle">A tool to help Animal Crossing: New Horizons players find their favourite villagers </h3>
                </div>
            </div>

            <div className="df-bg">
                <div className="df-written-content">
                    <h2 className="df-h2">Background</h2>
                    <p>Animal Crossing: New Horizons is a  is a sandbox-style roleplaying game released by Nintendo for Nintendo Switch in 2020.<br/>
                        The player is a villager on a small deserted island. The island has space for up to 10 anthropomorphic animals who can move in as villagers, with several species of animals featured, and eight different personality types.
                    </p>
                    <p>
                        Many players have favourite villagers that they seek to find for their town (known by the fandom as “Dreamies”). One main way to find a new villager is to take a Mystery Island Tour, where a seemingly random villager will be present if you have space available in your game. Visiting a mystery island requires an in-game airplane ticket, which can take a lot of effort to obtain.
                        I wanted to create a tool that would let people budget for tickets better, and see how different factors increased their odds.
                    </p>
                    <p>
                        The result of my project is Dreamy Finder which can be found online <a className="df-link" href="http://bexking.github.io/acnh-dreamy-finder" target="_blank">here</a>, or take a look at <a className="df-link" href="https://github.com/bexking/acnh-dreamy-finder" target="_blank">my Github</a>.
                    </p>
                </div>
            </div>    

            <div className="df-research">    
                <div className="df-written-content">
                    <h2 className="df-h2">Research & Observations</h2>
                    <p>
                        When Animal Crossing: New Horizons released I noticed many people (including friends, streamers, people posting online) were visiting mystery islands trying to find their favourite villagers. There are around 400 villagers in the game, but people were saving up tickets and becoming shocked when the amount of tickets required crept up sometimes into the thousands before finding the villager they were after. 
                    </p>
                    <p>
                        Dataminers found out how mystery island character was generated, and discovered villager selection wasn't a simple 1/400 villagers.
                        They found out the game first selects for one of the 35 animal species, and then a random character within each species.
                        You can see the same character selected an unlimited number of times in a play session, and the same character can also be selected multiple times in a row.
                    </p>
                    <p>
                        This can lead to some interesting strategies that are less obvious. For example, if you are searching for an octopus, there are only 3 octopi in the game.
                        If you took an octopus you didn’t particularly want, the next time the game selected for the species octopus, you now have a 50% chance that the octopus is the one you want.
                    </p>
                    <p>
                        I observed streamers on Twitch, and players in various Discords and Reddit forums saving up tickets to find their favourite villagers, with many saving their tickets into the hundreds, and being disappointed when the final totals were above 600-1000 tickets.
                        I recorded a rough idea of their process and what they wanted to know/find out in order to determine what a player might want to know, and what the ideal user flow would be.
                    </p>
                    <div className="modal-popout">
                        <Popup 
                            trigger={<img id="df-journey" src={DfJourney2} alt="User Journey - annotated" />} 
                            position='top center'>
                            { close => (<>
                                <img style={{height: "1200px", "width": "927px"}} src={DfJourney1} alt="User Journey - annotated" />
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                            </>)
                        }
                        </Popup>
                    </div>
                </div>
            </div>    

            <div className="df-goals">
                <div className="df-written-content">
                    <h2 className="df-h2">Design Goals</h2>
                    <div id="df-site-goals">
                        <div id="site-goals-text">
                            <h4 id="df-list-h4">The site needs to:</h4>
                            <ul>
                                <li>
                                    Be easy for players to use and understand
                                </li>
                                <li>
                                    Make it easy for users to find a specific villager from the large list
                                </li>
                                <li>
                                    Work on a wide range of devices
                                </li>
                                <li>
                                    Provide players with data in a straightforward, easy to understand way
                                </li>
                                <li>
                                    Allow players to easily adjust their inputs to see how different changes affect their odds
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="df-ideas"> 
                <div className="df-written-content">
                    <h2 className="df-h2">Ideation & Prototyping</h2>
                    <p>Ideation began with sketching to work out the general structure and logic of the page, before moving into Figma to start digital prototyping.</p>
                    <div className="df-ideation-container">
                        <img className="df-ideation" src={DfSketch1} alt="User Journey - annotated" />
                        <img className="df-ideation" src={DfSketch2} alt="User Journey - annotated" />
                        <img className="df-ideation" src={DfSketch3} alt="User Journey - annotated" />
                        <img className="df-ideation" src={DfSketch4} alt="User Journey - annotated" />
                        <img className="df-ideation" src={DfSketch5} alt="User Journey - annotated" />
                        <img className="df-ideation" src={DfSketch6} alt="User Journey - annotated" />
                    </div>
                    <p>
                        Once I had a rough idea of the structure of the site, I iterated in Figma to create a more accurate and better quality prototype.
                        Here I was able to wireframe the prototype and check that the flow was intuitive. I also began experimenting with the visual design, basing the fonts and colour palette off the in-game map.
                    </p>
                    <div className="digi-prototyping-container">
                        <img id="acnh-map" src={AcnhMap} alt="Example of ACNH in-game map" />
                        <div className="df-digital-prototyping">
                            <img className="df-digi-ideation" src={DfIt1v1} alt="Rough first digital iteration page 1" />
                            <img className="df-digi-ideation" src={DfIt1v2} alt="Rough first digital iteration page 2" />
                        </div>
                        <p>
                            I continued to iterate within Figma, working on improving flow, creating clear wireframes, and refining the visual style.
                        </p>
                        <p>
                            The design was resolved into the below digital prototype. My main priority was to make it simple for users to find the villager they're looking for from the large list, so I planned to keep track of the state of the search box, so that the applicable results update with every keystroke.
                        </p>
                        <p>
                            I also found an API that I could use to access the villager pictures, as well as important data I would need such as the villagers' species types and personality types for the results page.
                        </p>
                        <div className="df-video-section">
                            <video className="vid" controls muted playsInline >
                                <source src={DfPrototype} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="df-build">
                <div className="df-written-content">
                    <h2 className="df-h2">Building & Publishing the site</h2>
                    <p>
                        The site was built in React. This was the first site I'd ever built in React so it was a big learning curve. To make the site more interactive and a more natural user experience, I took advantage of state to keep the search box updating. It was great to be able to create components and reuse them throughout the site so I didn't have to repeat content. This was also the first time using an API. It was great to be able to get all the information and images I needed about each villager from the API and saved a lot of time.
                    </p>
                    <p>
                        See the project on my  <a className="df-link" href="http://bexking.github.io/acnh-dreamy-finder" target="_blank">github</a>.
                    </p>
                </div>    
            </div>

        </div>
    )
}
