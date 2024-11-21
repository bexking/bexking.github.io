import React from 'react';
import ProjectGrid from '../../Components/JS/projectgrid.js';
import ContactFooter from '../../Components/JS/contact-footer.js';
import '../CSS/work.css';
import Dis1 from '../../Assets/dis-images/dis1.jpg';

export default function Work() {
    return (
        <div>
           <div className="work-feature">
                <div className='feature-section'>
                    <div className='text-block-third'>
                        <h1>Mahi</h1>
                        <p className='p-medium'>Here is a short blurb about mahi or we can just do something decorative idk</p>
                    </div>
                    <div className='project-two-thirds'>
                        <img id="test-image" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                        <div className='project-label'>
                            <span className='project-label-large'>Project Name</span>
                            <span className='project-label-large' id='light-text'>YEAR</span>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <ProjectGrid />
                </div>
            </div>
            <ContactFooter />
        </div>
    )
}
