import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import DfProcess from '../../Components/JS/df-process.js'
import Nav from '../../Components/JS/nav2.js';

export default function Dreamy() {
    return (
        <div className="page">
            {/* <Home /> */}

            <Nav />

            <div className="content">
                <h1 className="projecth1">Dreamy Finder</h1>
                <p>Animal Crossing: New Horizons is a game released by Nintendo for the Nintendo Switch. <br/>
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
        </div>
    )
}
