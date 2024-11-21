import React from 'react'
import '../CSS/projectPage.css';
import '../CSS/displace.css';
import Dis1 from '../../Assets/dis-images/dis1.jpg';
import Dis2 from '../../Assets/dis-images/dis2.jpg';
import Dis3 from '../../Assets/dis-images/dis3.jpg';
import Dis4 from '../../Assets/dis-images/dis4.jpg';
import Dis5 from '../../Assets/dis-images/dis5.jpg';
import Dis6 from '../../Assets/dis-images/dis6.jpg';

export default function Displacement() {
    return (
        <div>

            {/* TITLE */}
            <div className="dis-page">
                <h1 className="project-heading" id="dis-heading">Displacement</h1>
            </div>

            {/* IMAGES */}
            <div className="photos-section">
                <div className="dis-photo-caption">
                    <img className="dis-img" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                    <p className="dis-caption">For a long time many people have enjoyed living on the coast.</p>
                </div>
                <div className="dis-photo-caption">
                    <img className="dis-img" src={Dis2} alt="The ice has melted, and the water level laps at the doorways" />
                    <p className="dis-caption">But as the world becomes warmer, the coast shrinks.</p>
                </div>
                <div className="dis-photo-caption">
                    <img className="dis-img" src={Dis3} alt="The ice has melted further and the water is nearly at the windows" />
                    <p className="dis-caption">When the ice melts, the sea level rises.</p>
                </div>
                <div className="dis-photo-caption">
                    <img className="dis-img" src={Dis4} alt="The ice is nearly gone and the huts are almost fully submerged. One has been lifted from its foundations." />
                    <p className="dis-caption">And rises.</p>
                </div>
                
                <div className="dis-photo-caption" id="dis-last"> 
                    <img className="dis-img"  src={Dis5} alt="All the ice is melted and the huts are completely underwater." />
                    <p className="dis-caption">Until we are displaced.</p>
                </div>
                <div className="dis-text">
                    <h2 id="displacement-intro">displacement</h2>
                    <p className="dis-p">Displacement occurs when something is placed in water and the water level rises. The word displacement is also used when people must leave their homes against their will/desires.</p>
                    <p className="dis-p">Climate change is the most significant crisis of our time. Rising temperatures melt the world’s ice, causing sea levels to rise. This will cause many people to lose their homes. As an indigenous person to an island nation, living near the coast, this is of great personal concern to me, and something I think not enough people are focusing on.</p>
                    <p className="dis-p">For many, the visible signs of climate change don’t confront us every day, and won’t be seen until it is too late to prevent. My project aims to illustrate the problem of sea level rise to an audience that may not respond as much to photos of melting glaciers. The project photographs a micro-village against large blocks of ice, slowly melting, and inevitably submerging the homes.</p>
                    <p className="dis-p">I captured the same scene at various stages of ice melt, to showcase the change over time and the loss of land mass. While the visual style is quaint and whimsical, the project aims to make people consider the ice and understand the effect it could have on the sea levels, our homes, and organised society if we do not act now.</p>
                    {/* <img id="dis-img-all" src={Dis6} alt="" /> */}
                </div>
            </div>


        </div>
    )
}
