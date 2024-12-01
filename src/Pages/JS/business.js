import React from 'react'
import '../CSS/projectPage.css';
import BusHero from '../../Assets/bus-images/bus-hero.jpg';
import BusVid from '../../Assets/bus-images/bus-vid.mp4';
import BusLayers from '../../Assets/bus-images/bus-layers.jpg';
import ContactFooter from '../../Components/JS/contact-footer.js';

export default function Business() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>Proof of concept</span>
                        <h1 className='long-project-title'>Visualising the Māori Business Ecosystem</h1>
                        <p className='type-of-work'>Digital prototyping, Geospatial visualisation</p>
                        <p>A rapid, proof-of-concept prototype to creatively visualise and mapping the Māori economy in Te Whanganui a Tara.</p>
                        <p>
                            The client wanted to secure funding for a project to visualise the local Māori economy, as its scope and connections aren't clearly recorded. 
                            The client wanted a low-medium fidelity prototype they could use to pitch their idea to map the local Māori economy in a way that related to the whenua - sharing pūrakau (traditional stories) and building in layers to eventually show the Māori economy as it is today, highlighting statistics, as well as youth employment schemes.
                            Working to a tight schedule, I worked with my colleagues Tahlia Conrad-Hinga (Ngāi Tahu, Ngāi Te Rangi, Illustrator) and Jim Scully (Pākehā) to host an ideation workshop with the client to surface the must-haves for each layer to ideate and plan the narrative. Tahlia and I planned the build process. She illustrated assets and I created the interactive digital prototype in Figma.</p>
                            <p>The client was provided with the interactive prototype, as well as a video walkthough they could simply play for people while presenting if they wished. The client was able to get approval to explore the concept further with kaupapa Māori designers.</p>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={BusHero} alt="Laptop mockup of prototype set to layer showing estimated māori economy statistics on a map of Te-Whanganui-a-Tara" />
                    </div>
                </div> 

                <div className='full-width-content-block'>
                    <div className='video-section'>
                        <video className="vid" muted controls playsInline>
                            <source src={BusVid} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className='full-width-content-block'>
                    <img id="full-width-test" src={BusLayers} alt="Expanded layers version of the map" />
                </div>  
            </div>
            <ContactFooter />
        </div>
    )
}