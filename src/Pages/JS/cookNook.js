import React from 'react'
import '../CSS/cookNook.css';
import CnHero from '../../Assets/cn-images/cn-hero.jpg';


export default function CookNook() {
    return (
        <div>
            <div className="page" id="page-cn">
                <img id="cn-hero" src={CnHero} alt="cooknook mockup screens on iphone and mac" />
                <h1 class="project-heading" id="cn-heading">Cook Nook</h1>
                <h2 id="hints-subtitle">A versitle way to store, share and organise recipes</h2>
                
                <div className="written-content">
                    <h2 className="cn-h2">Background</h2>
                    <p>This was a graphic design project that I used to explore UI design. I enjoy cooking but found that over time I have a lot of recipes in many different places, and since they're hard to find, I end up forgetting about some of my favourite dishes and cooking the same things over and over. After talking to friends I realised this was a common problem, so I wanted to create one little space where you could house all your favourite dishes, or branch out when you feel adventurous.</p>
                </div>
                
                <div className="written-content">
                    <p>Cook Nook is a mobile app and website that lets you upload your own recipes, save and share recipes you've found, and find new recipes to cook.</p>
                    <p>Create a profile and start saving your recipes. Sort saved recipes into categories that make sense for you. Add recipes to a weekly meal planner, and generate your shopping list straight from the ingredients. Find recipes for special diets easily using tags.</p>
                    <p>All recipes clearly show prep time, cook time, overall time and allow you to switch between imperial and metric to make planning and cooking a breeze. </p>
                </div>

                <div className="written-content">
                    <h2 className="cn-h2">The Problem</h2>
                    <p>
                        The internet has made learning to cook and finding inspiring recipes easier than ever, but it can be difficult to organise recipes and keep track of where they're stored.<br/>
                        Many people have favourite recipes from a bunch of sources - recipe blogs, youtube, books, written recipes from friends and family, but no one place where they can access all their favourites.
                    </p>
                    <p>
                        Cook Nook is a proposed app/website that creates a single point of truth for people to store their recipes, as well as allowing users to share recipes they've created, find and save new recipes, and plan meals and grocery lists.
                    </p>
                </div>

                <div className="written-content">
                    <h2 className="cn-h2">Design Process</h2>
                    <p>As this was a graphic design project as well as a UX one, I needed to start with brand identity, creating the logotype and colour palette before working on the web and app design.</p>
                    <p>From there, I started designing the app in Adobe XD, focusing on page structure and user flows, and then later adapting the app into a desktop website version.</p>
                </div>
                
                <div className="written-content">
                    <h2 className="cn-h2">Design Features</h2>
                </div> 

                <div className="written-content">
                    <h2 className="cn-h2">The Problem</h2>
                </div> 

                <div className="written-content">
                    <h2 className="cn-h2">Design Process</h2>
                </div> 

                <div className="written-content">
                    <h2 className="cn-h2">Proposed Design</h2>
                </div> 

            </div>
        </div>

    )
}
