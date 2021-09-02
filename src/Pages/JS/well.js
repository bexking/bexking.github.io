import React from 'react'
import '../CSS/well.css';
import '../CSS/projectPage.css';
import SeeMore from "../../Components/JS/see-more.js";
import WellHero from '../../Assets/well-images/well3-overview-nologo.jpg';
import DesignThinking from '../../Assets/well-images/design-thinking-model.png';

export default function Well() {
    return (
        
        <div>
            <div className="well-page">
                <img id="homepage-hero" src={WellHero} alt="Well Well Well App Homescreen displayed on iPhone surrounded by examples of the app's other main sections." />
                <h1 class="project-heading" id="well-heading">Well Well Well</h1>
                <h2 id="well-subtitle">A Victoria University of Wellington-based app to help raise awareness of the United Nations Sustainable Development Goals, help students to learn to look after their health and wellbeing, and provide anonymous reporting to the uni about how students are feeling.</h2>
            </div>

            <div className="">
                <div className="well-written-content">
                    <h2 className="well-h2">Background</h2>
                    <p className="well-p">As part of DSDN 183 - Design Thinking For Sustainability I was tasked to come up with a project that would increase VUW students’ awareness of the UN Sustainable Development Goals. The outcome needed address a given SDG, as well as increase awareness of the SDGs in general. </p>
                    <p className="well-p">
                        I was given SDG 3 - Good Health and Wellbeing and used Stanford's Design Thinking model to come up with my concept.
                    </p>
                    <img id="design-thinking" src={DesignThinking} alt="Stanford Design Thinking Model - Empathise-Define-Ideate-Prototype-Test" />
                </div>
            </div>
            <SeeMore project1={"ib"} project2={"rm"}/>
        </div> 
    
    )
} 