import React from 'react';
import ProjectGrid from '../../Components/JS/projectgrid.js';
import ContactFooter from '../../Components/JS/contact-footer.js';
import '../CSS/work.css';
import Dis1 from '../../Assets/dis-images/dis1.jpg';
import WorkNavItemHero from "../../Components/JS/work-nav-item-hero.js"
import projects from "../../projects.js";

export default function Work() {
    return (
        <div>
           <div className="work-feature">
                <div className='feature-section'>
                    <div className='text-block-third'>
                        <h1>Mahi</h1>
                        <p className='p-medium'>
                            Take a look at some of my projects. If you are interested in seeing more or learning about work I can't show here, just send me an email.
                        </p>
                    </div>
                    <div className='project-two-thirds'>
                        <div className='test-image'>
                            <WorkNavItemHero project={projects.displace} className="hero-image" id="large-hero"/>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectGrid />
            <ContactFooter />
        </div>
    )
}
