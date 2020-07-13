import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'

export default function Dome() {
    return (
        <div className="page">
            {/* <Home /> */}
           
            <Sidebar />
           
            
            <div className="content">
                <h1 className="projectTitle">MindFull Dome Takeaway Container</h1>
                <p>Rethinking the takeaway container based on psychology findings to aid portion control</p>
                <div className="heroImage">
                    <div className="hero-image" id="hero"></div>
                </div>
                <div className="features">
                    <h3>Design Features</h3>
                    <p>The takeaway container features two nested bowls to hold the main dish and the sides. By nesting them together, it reduces the amount of each, while giving the illusion that there is a lot of food. </p>
                    <p>The design has a weighted platform to position the main higher up within the container, allowing it to look fuller. The weighted base helps to maintain the illusion while the bowl is held.</p>
                </div>
                <div className="problem">
                    <h3>Background</h3>
                    <p>Takeaway containers are typically short and rectangular. This makes it difficult for customers to judge the amount of food present, and think it isn’t much food.
Psychology has found that people often think there is more food present when 
containers are tall and thin, and find it more difficult to judge the amount of 
food when the geometry is not so boxy.</p>
                </div>
                <div className="process">
                    <h3>Design Process</h3>
                    <p>This is a short blurb giving a quick intro to the project</p>
                </div>
                <div className="finalImages">
                    <div className="final-images" id="fin1"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
                <div className="finalImages">
                    <div className="final-images" id="fin1"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
                <div className="finalImages">
                    <div className="final-images" id="fin1"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
            </div>
        </div>
    )
}
