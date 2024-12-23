import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import ScProcess from '../../Assets/sc-process.jpg';
import Exec from '../../Assets/screen-inv/exec-summary.jpg';
import Focus from '../../Assets/screen-inv/prop-focus.jpg';
import { Link } from "react-router-dom";

export default function ScReview() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>Public Sector Organisation</span>
                        <h1 className='long-project-title'>Rethinking the web experience for people engaging in a sensitive claims process</h1>
                        <p className='type-of-work'>User research, UX/UI, Workshop facilitation</p>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={ScProcess} alt="3 phones showing different parts of the visibility of the process section of the sensitive claims website. In the background, blurred, is a closeup photo of the workshop whiteboard covered in post-its" />
                    </div>
                </div> 

                <div className='body-copy'>
                    <p>
                        
                    </p>
                    <p>
                       
                    </p>
                    <p>
                        
                    </p>  
                </div>
                {/* <div className='full-width-content-block'>
                    <img className='full-width-test' src={Exec} alt="A4 booklet open to the General Themes section of the report"/>
                </div>
                <div className='full-width-content-block'>
                    <img className='full-width-test' src={Focus} alt="A4 booklet open to the Proposed Focus section of the report"/>
                </div> */}
                <div className='full-width-content-block'>
                    <div>
                        <div className='next-project-bar'>
                            <div className='back'>
                                <Link to="/screen-investment-review" className="med-link">&#8592;&emsp;&nbsp;Previous</Link>
                            </div>
            
                            <div className='next'>
                                <Link to="/businessecosystem" className="med-link">Next&emsp;&#8594;&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </div>
    )

}