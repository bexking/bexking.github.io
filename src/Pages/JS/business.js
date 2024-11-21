import React from 'react'
import '../CSS/business.css';
import BusHero from '../../Assets/bus-images/bus-hero.jpg';
import BusVid from '../../Assets/bus-images/bus-vid.mp4';
import BusLayers from '../../Assets/bus-images/bus-layers.jpg';

export default function Business() {
    return (
        <div>
            <div className="page" id="page-bus">
                <img id="bus-hero" src={BusHero} alt="Laptop mockup of prototype set to layer showing estimated māori economy statistics on a map of Te-Whanganui-a-Tara" />
                <div>
                    <h1 className="project-heading" id="bus-heading">Visualising the Māori Business Ecosystem</h1>
                    <h3 id="bus-subtitle">A prototype as proof-of-concept for creatively visualising and mapping the Māori economy in Te Whanganui a Tara. <br/> 
                    ThinkPlace x Te Matarau a Māui
                    </h3>
                </div>  

                <div className="written-content">
                    <h2 className="bus-h2">The challenge</h2>
                    <p> The client approached us as they are regularly asked for information about the local Māori economy, but there is no clear record - it’s hard to track, measure, see statistics and connections.
                        They wanted a low-medium fidelity proof of concept to secure funding to map the local Māori economy in a way that related to the whenua, telling local stories and building up in layers to eventually show the Māori economy as it is today, highlighting statistics, as well as youth employment schemes.
                        The project had a tight timeframe and budget, so it was important our team worked efficiently to ensure the client would be able to present the concept to be able to access funding. 
                    </p>
                </div> 

                <div className="written-content">
                    <h2 className="bus-h2">Approach</h2>
                    <p> 
                        I (Ngāti Porou) worked with my colleagues Tahlia Conrad-Hinga (Ngāi Tahu, Ngāi Te Rangi) and Jim Scully (Pākehā) to bring the project to life.
                        We hosted an ideation workshop with the client, where we learned the must-haves for each layer and began sketching out pūrakau (indigenous stories) or other symbolism from te ao Māori we thought might add depth to the story. 
                    </p>    
                    <p>    
                        It was a priority for the client that a future version of the product would be able to be viewed by others easily, that they be able to explore the parts of the map they’re most interested in, and for the potential to maybe allow people to add to the information themselves. It made sense to prototype something for the web. 
                        We decided to create a prototype in Figma to model an interactive tool, with me giving direction for assets needed and building the prototype, and Tahlia creating the beautiful illustrations.
                    </p>
                </div>

                <div className="written-content">
                    <h2 className="bus-h2">Design</h2>
                    <p> 
                        The result was an interactive, layered map which moves between Māui fishing up Te Ika a Māui (The North Island), the local whenua and stories of its formation, and on to businesses, statistics, and youth employment schemes. Users can navigate by clicking layers directly, or arrows to the side of the map.
                    </p>
                </div>      

                <div>
                    <img id="bus-layers" src={BusLayers} alt="Expanded layers version of the map" />
                    <div>
                        <video className="vid" id="busVid" muted controls playsInline>
                            <source src={BusVid} type="video/mp4" />
                        </video>
                    </div>
                </div>   

                <div className="written-content">
                    <h2 className="bus-h2">Outcomes</h2>
                    <p> 
                    The client was provided with the interactive prototype, as well as a video walkthough they could simply play for people while presenting if they wished. The client was able to get approval to explore the concept further with kaupapa Māori designers.
                    </p>
                </div>   
            
            </div>
            
        </div>
    )
}