import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'


export default function CookNook() {
    return (
        <div className="page">
            {/* <Home /> */}

            <div className="content">
                <h1 className="projectTitle">Cook Nook</h1>
                <p>A social network for sharing, storing and organising recipes.</p>
                <div className="heroImage">
                    <div className="hero-image" id="cooknook"></div>
                </div>
                <div className="features">
                    <h3>Design Features</h3>
                    <p>Cook Nook is a mobile app and website that lets you upload your own recipes, save and share recipes you've found, and find new recipes to cook.</p>
                    <p>Create a profile and start saving your recipes. Sort saved recipes into categories that make sense for you. Add recipes to a weekly meal planner, and generate your shopping list straight from the ingredients. Find recipes for special diets easily using tags.</p>
                    <p>All recipes clearly show prep time, cook time, overall time and allow you to switch between imperial and metric to make planning and cooking a breeze. </p>
                </div>
                <div className="problem">
                    <h3>Background</h3>
                    <p>This was a graphic design project that I used to explore UI design. I enjoy cooking but found that over time I have a lot of recipes in many different places, and since they're hard to find, I end up forgetting about some of my favourite dishes and cooking the same things over and over. After talking to friends I realised this was a common problem, so I wanted to create one little space where you could house all your favourite dishes, or branch out when you feel adventurous.</p>
                </div>
                <div className="process">
                    <h3>Design Process</h3>
                    <p>As this was a graphic design project as well as a UX one, I needed to start with brand identity, creating the logotype and colour palette before working on the web and app design.</p>
                    <p>The app was designed first, focusing on page structure and user flows in Adobe XD, and then later adapting the app into a desktop website version.</p>
                    <div className="finalImages">
                        <div className="final-images" id="cn-logos"></div>
                        <div className="final-images" id="cn-colour"></div>
                    </div>
                    <div className="finalImages">
                        <div className="final-images" id="cn-icons"></div>
                        <div className="final-images" id="cn-icons"></div>
                    </div>
                    <div>
                        <div className="hero-image-w" id="cnWorking"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
