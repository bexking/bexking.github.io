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
                        <h1 className='long-project-title'>Revising a sensitive claims website experience</h1>
                        <p className='type-of-work'>User research, UX/UI, Workshop facilitation</p>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={ScProcess} alt="3 phones showing different parts of the visibility of the process section of the sensitive claims website. In the background, blurred, is a closeup photo of the workshop whiteboard covered in post-its" />
                    </div>
                </div> 

                <div className='body-copy'>
                    <p>
                        Following the Royal Commission of Inquiry into Abuse in Care in Aotearoa, a public-sector client wanted us to review and improve the sensitive claims section of their website. They wanted to improve the experience people have when deciding to make a claim, as well as during the claims process. They sought to improve transparency and accessibility for those using the site, and to build trust.
                    </p>
                    <p>
                       I worked with two colleagues to review the existing site, conduct research, and create digital prototypes for desired changes. 
                       The research phase included hosting workshops with client subject matter experts (SMEs) to learn about the existing process and pain points, and interviewing legal experts and accessibility experts who had experience supporting people through this sensitive claims process. 
                    </p>
                    <p>
                        Our findings were presented back to the client SMEs and became guiding principles to co-design and prototype proposed changes. I led a small group focusing on "Process Visibility" - a section focused on clearly showing what happens at each phase of the process Many who had worked with claimants shared that this information was not easy to access, and that the lack of transparency made it hard for people lodging claims to know what to expect.
                    </p>  
                    <p>
                        As a team, my colleages and I created medium fidelity prototypes of the Process Visibility section, an eligibility tool to help people deciding to make a claim understand if they are in the right place, and a more user-friendly digital submission form. Internal testing and feedback was conducted in a workshop and the final proposed designs were provided to the client for any further testing and implementation required.
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