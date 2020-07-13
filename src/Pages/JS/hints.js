import React from 'react'
import '../CSS/projectPage.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';
import Sidebar from '../../Components/JS/nav.js'

export default function Hints() {
    return (
        <div className="page">
            {/* <Home /> */}
           
            <Sidebar />
           
            
            <div className="content">
                <h1 className="projectTitle">Language Learning Hints with Engoo</h1>
                <p>A proposed hint-system to help English-learners form stronger memories of the words they're learning in Daily News lesson material.</p>
                <div className="heroImage">
                    <div className="hero-image" id="hero"></div>
                </div>
                <div className="features">
                    <h3>Design Features</h3>
                    <p>The hint-system allows users to add hints to specific words they'd like to learn. Hints can be added in a variety of formats such as text, audio, link reminders, or they can even draw or upload an image.</p>
                    <p>By letting users create their own hints, their memory forms a stronger connection to the word through the hint, increasing their chances of remembering.</p>
                    <p>Direct translations of the article are also available.</p>
                </div>
                <div className="problem">
                    <h3>Background</h3>
                    <p>Engoo is a Japanese-based company that provides online one-on-one English lessons with a tutor. The site provides lesson material, with Daily News being the most popular. Daily News provides news articles in simplified English, at different levels of difficulty to assist with lessons. </p>
                    <p>Translations are offered in the most popular native languages. However the translation is provided below the text, making it a difficult tool for users to check against. Users either must scroll up and down to go between English and their native language, or wait until the end to use the translation and check how well they did. </p>
                    <p>This project seeks to find a better way to incorporate these translations into the site, as well as find opportunites to improve the ways users can receive prompts overall.</p>
                </div>
                <div className="process">
                    <h3>Design Process</h3>
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
