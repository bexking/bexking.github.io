import React from 'react'
import '../CSS/projectPage.css';
import Dis1 from '../../Assets/dis-images/dis1.jpg';
import ContactFooter from '../../Components/JS/contact-footer.js';

export default function ProjectPage() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span className='upper-title'>Pre-title</span>
                        <h1 className="projectTitle">Project Title</h1>
                        <p>Here is a bit of a blurb which I will try and make roughly the length of a project blurb. When making this blurb i typed a lot on the computer, as I just wanted to get an idea of the spacing. Once I had done that I reviewed it. In the next phase of work I will test and refine the CSS to see what is/isn't working.</p>
                        <p className='type-of-work'>Type of work</p>
                        <a href="" className='external-link'>Link to project</a>
                    </div>
                    <div className="project-two-thirds">
                        <img id="test-image" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                    </div>
                </div> 

                <div className='full-width-content-block'>
                    <img id="full-width-test" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                </div>  

                <div className='half-width-content-block'>
                    <img id="half-width-test" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                    <img id="half-width-test" src={Dis1} alt="Four small weatherboard huts sit in an icy coastal scene" />
                </div>
            </div>
            <ContactFooter />
        </div>
    )
}
