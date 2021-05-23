import React from 'react'
import '../CSS/df.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import DfProcess from '../../Components/JS/df-process.js'
import Nav from '../../Components/JS/nav2.js';

export default function Dreamy() {
    return (
        <div className="page">
            {/* <Home /> */}

            <Nav />

            <h1>Dreamy Finder for Animal Crossing: New Horizons</h1>

            <div className="written-content">
                <p>Animal Crossing: New Horizons is a  is a sandbox-style roleplaying game released by Nintendo for Nintendo Switch in 2020.</p>
                <p>
                    The player is a villager on a small deserted island that they can develop. The island has space for up to 10 anthropomorphic animals who can move in as villagers, with several species of animals featured, and eight different personality types.
                </p>
                <p>
                    Animal Crossing: New Horizons is the latest title in a long series of Animal Crossing games. As the games have been around a while, many players have favourite animal villagers that they seek to find for their town. In New Horizons, one main way to find a new villager is to take a mystery island tour, where a villager will be present if you have a plot available in your game. Visiting a mystery island requires a ticket, which can take a lot of effort to obtain.
                    I wanted to create a tool that would let people budget for tickets better, and see how different factors increased their odds.
                </p>
            </div>

            <div className="written-content">
                <h2>Research</h2>
                <p>
                    Many players have favourite villagers they seek to find (called “Dreamies” by the fandom). As there are over 400 villagers available in the game it can be difficult to get your faves. When the game was released I noticed many people were visiting mystery islands trying to find their faves, thinking they had enough hard-earned airplane tickets, and then becoming surprised when the amount of tickets needed crept up into the hundreds, sometimes the thousands before finding their faves. 
                </p>
                <p>
                    Dataminers found out how mystery island character was generated, and there were a few more selection steps than a simple 1/400 villagers.
                    There are many different animal species in the game, all with differing numbers of animals within each species. 
                    The game first selects for species, and then a random character within each species.
                    You can see the same character an infinite number of times in a play session, and you can get the same character multiple times in a row.
                </p>

                <p>This can lead to some interesting strategies that are less obvious. For example, if you are searching for an octopus, there are only 3 octopi in the game.
If you took an octopus you didn’t particularly want, the next time the game selected for the species octopus, you now have a 50% chance that the octopus is the one you want.</p>
            </div>

            <div className="content">
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
            </div>
        </div>
    )
}
