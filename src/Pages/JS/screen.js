import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import Screen from '../../Assets/screen-sector-hero.jpg';
import Exec from '../../Assets/screen-inv/exec-summary.jpg';
import Focus from '../../Assets/screen-inv/prop-focus.jpg';
import { Link } from "react-router-dom";

export default function screenInvReview() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>MBIE & MCH </span>
                        <h1 className='long-project-title'>Screen sector investment review analysis</h1>
                        <p className='type-of-work'>Qualitative analysis, Writing, Graphic design</p>
                        <a href="https://www.mbie.govt.nz/dmsdocument/26661-summary-of-submissions-and-surveys-thinkplace-pdf">Link to the full report</a>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={Screen} alt="A4 booklet showing the Screen Sector report cover" />
                    </div>
                </div> 

                <div className='body-copy'>
                    <p>
                        From 2022-2023 the Government undertook a review of screen sector investment focused on the New Zealand Screen Production Grant.
                    </p>
                    <p>
                        In my role I drove analysis of 686 survey submissions and played a key role in synthesis, thematic analysis, and writing. I also provided graphic design support.
                        I set up our research software and taught other team members to use it. Having a robust digital process to manage data helped give the client evidence and assurance throughout the project, and allowed us to keep track of important insights from a variety of audiences. 
                    </p>
                    <p>
                        The outcomes of the review were well-received by the sector, with RNZ reporting SPADA (Screen Production and Development Association NZ) president Irene Gardiner saying the organisation was “very pleased with the changes, their concerns had been listened to and the changes were a common-sense response to the needs of the industry.” <br/>—  
                        <a href="https://www.rnz.co.nz/news/political/490972/screen-production-grant-to-be-reworked-after-review"> Screen Production Grant to be Reworked After Review, RNZ.</a>
                    </p>  
                </div>
                <div className='full-width-content-block'>
                    <img className='full-width-test' src={Exec} alt="A4 booklet open to the General Themes section of the report"/>
                </div>
                <div className='full-width-content-block'>
                    <img className='full-width-test' src={Focus} alt="A4 booklet open to the Proposed Focus section of the report"/>
                </div>
                <div className='full-width-content-block'>
                    <div>
                        <div className='next-project-bar'>
                            <div className='back'>
                                <Link to="/banking" className="med-link">&#8592;&emsp;&nbsp;Previous</Link>
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