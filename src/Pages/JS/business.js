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
                        <p>
                            The client wanted to create a geospatial map of the local Māori economy and needed  a low-medium fidelity prototype to pitch their idea to secure funding.</p>
                            <p> Reflecting Te Ao Māori, the map needed to begin with whenua and build in layers to eventually show the Māori economy as it is today, highlighting data and youth employment schemes.</p>
                            <p>Tahlia Conrad-Hinga (Ngāi Te Rangi, Kāi Tahu) and I developed the narrative and build process together. She illustrated the assets I used to build the prototype.</p>
                            <p>The client secured funding to explore the concept further with kaupapa Māori designers.</p>
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