import React from 'react'
import '../CSS/df.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import DfProcess from '../../Components/JS/df-process.js'
import Nav from '../../Components/JS/nav2.js';
import DfJourney from '../../Assets/df-images/df-1.jpg';
import DfSketch1 from '../../Assets/df-images/df-sk1.jpg';
import DfSketch2 from '../../Assets/df-images/df-sk2.jpg';
import DfSketch3 from '../../Assets/df-images/df-sk3.jpg';
import DfSketch4 from '../../Assets/df-images/df-sk4.jpg';
import DfSketch5 from '../../Assets/df-images/df-sk5.jpg';
import DfSketch6 from '../../Assets/df-images/df-sk6.jpg';
import AcnhMap from '../../Assets/df-images/acnh-map.jpg';
import DfIt1v1 from '../../Assets/df-images/digital-it1.png';
import DfIt1v2 from '../../Assets/df-images/digital-it1.1.png';
import DfPrototype from '../../Assets/df-images/df-prototype.mp4';
import DfHero from '../../Assets/df-images/df-hero-wide1.png';
import Bg from '../../Assets/bg.png';
import ContactFooter from '../../Components/JS/contact-footer';

export default function Dreamy() {
    return (
        <div>
            <Nav />
            <div className="page" id="page-df">

                <a href="http://bexking.github.io/acnh-dreamy-finder"><img id="df-hero" src={DfHero} alt="Green Imac with dreamy finder selection screen on teal background" /></a>
                <div>
                    <h1 class="project-heading" id="df-heading">Dreamy Finder</h1>
                    <h3 id="df-subtitle">A tool to help Animal Crossing: New Horizons players find their favourite villagers </h3>
                </div>
                <div className="written-content">
                    
                    <p>Animal Crossing: New Horizons is a  is a sandbox-style roleplaying game released by Nintendo for Nintendo Switch in 2020.<br/>
                        The player is a villager on a small deserted island. The island has space for up to 10 anthropomorphic animals who can move in as villagers, with several species of animals featured, and eight different personality types.
                    </p>
                    <p>
                        Many players have favourite villagers that they seek to find for their town (known by the fandom as “Dreamies”). One main way to find a new villager is to take a Mystery Island Tour, where a seemingly random villager will be present if you have space available in your game. Visiting a mystery island requires an in-game airplane ticket, which can take a lot of effort to obtain.
                        I wanted to create a tool that would let people budget for tickets better, and see how different factors increased their odds.
                    </p>
                    <p>
                        The result of my project is Dreamy Finder which can be found online <a href="http://bexking.github.io/acnh-dreamy-finder">here</a>, or take a look at <a href="https://github.com/bexking/acnh-dreamy-finder">my Github</a>.
                    </p>
                </div>

                <div className="written-content">
                    <h2>Research & Observations</h2>
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

                    <img id="df-journey" src={DfJourney} alt="User Journey - annotated" />
                </div>

                <div className="written-content">
                    <h2>Design Goals</h2>
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

                <div className="written-content">
                    <h2>Ideation & Prototyping</h2>
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
                            <video className="vid" controls muted>
                                <source src={DfPrototype} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                <div className="written-content">
                    <h2>Building & Publishing the site</h2>
                    <p>
                        The site was built in React. This was the first site I'd ever built in React so it was a big learning curve. To make the site more interactive and a more natural user experience, I took advantage of state to keep the search box updating. It was great to be able to create components and reuse them throughout the site so I didn't have to repeat content. This was also the first time using an API. It was great to be able to get all the information and images I needed about each villager from the API and saved a lot of time.
                    </p>
                    <p>
                        Can be found on my github.
                    </p>
                </div>    

                {/* <div className="content">
                    <h1 className="projecth1">Dreamy Finder</h1>
                    <p>Animal Crossing: New Horizons is a  is a sandbox-style roleplaying game released by Nintendo for Nintendo Switch in 2020.  <br/>
                        The game is a cute role-playing game where the player is a villager on a small island that they can develop. Each game can have up to 10 anthropomorphic animals as villagers, with several species of animals featured, and eight different personality types. 
                    </p>

                    <p>Animal Crossing: New Horizons is the latest title in a long series of Animal Crossing games. As the games have been around a while, many players have favourite animal villagers that they seek to find for their town.
                        In New Horizons, one main way to find a new villager is to take a mystery island tour, where a villager will be present if you have a plot available in your game. Visiting a mystery island requires a ticket, which can take a lot of effort to obtain.
                    </p>

                    <p>Finding a specific villager on a mystery island can take a lot of tickets, as there are almost 400 villagers in the game, and the random selection for the mystery island isn't a simple 1/total villagers.<br/>
                    Dreamy Finder aims to help player work out the odds of finding their dream villager on a mystery island so they can budget and save their tickets accordingly.
                    </p>

                    <div className="df-hero">
                        <div className="df-hero-image" id="df"></div>
                    </div>
                    <div className="features">
                        <h3 className="projecth3">Design Process</h3>
                        <p>I was building this website while learning ReactJS, so a large part of what I was working on was how to code and use state/routes/components. However it was still really important to me and my design process that I consider user flow and how they would want to journey through the tool.</p>
                    </div>

                    <DfProcess />

                    <div className="problem">
                        <h3 className="projecth3">Development</h3>
                        <p>Once I had a design in mind, it was important to me that the site flow quite quickly and give good feedback, so that users would be able to tell the villager they clicked had been locked in.</p>
                    </div>
                    <div className="process">
                        <h3 className="projecth3">Design Process</h3>
                        <p>This is a short blurb giving a quick intro to the project</p>
                    </div>
                    <div className="finalImages">
                        <div className="final-images" id="fin1"></div>
                        <div className="final-images" id="fin2"></div>
                    </div>
                </div>

                <div className="written-content">
                    <h2>Title</h2>
                    <p>Paragraph Paragraph</p>
                </div> */}
            </div>
            <ContactFooter />
        </div>
    )
}
