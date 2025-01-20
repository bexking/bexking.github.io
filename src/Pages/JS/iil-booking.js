import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import IilHero from '../../Assets/iil-booking.jpg';
import Workshop from '../../Assets/iil/workshop.jpg';
import WorkshopSB from '../../Assets/iil/workshop-storyboard.jpg';
import WalkFlows from '../../Assets/iil/walk-on-passenger.jpg';
import UserBooking from '../../Assets/iil/iil-booking-table.jpg';
import NextProject from '../../Components/JS/next-project.js';
import { Link } from "react-router-dom";

export default function iilBooking() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>Interislander</span>
                        <h1 className='long-project-title'>Streamlining booking experiences</h1>
                        <p className='type-of-work'>UX/UI, IA, Service Design</p>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={IilHero} alt="8 iphones showing different parts of the booking system such as search, vehicle details, and payment." />
                    </div>
                </div> 

                <div className='body-copy'>
                    <p>
                        Within service design work with Interislander's CX team, I identified the potential for the booking system to better serve customers and business goals and was given the opportunity to redesign the system with a colleague. 
                    </p>
                    <p>
                        The redesign aimed to improve usability and time taken to book. I reviewed the exisiting site and used insights from the service design work and Digital Marketing to inform decisions. I developed a new information architecture to reduce complexity by only showing customers what was relevant and created mid-fidelity digital prototypes with a colleague to bring the design to life. The design was iterated on weekly, incorporating emerging requirements from the service design stream.
                    </p>
                    <p>
                        At project completion, Interislander’s usual digital agency received the prototypes for final refinement and development. During internal testing booking time was reportedly halved. The final version went live in November, 2024.
                    </p>
                </div>   

                <div className='half-width-content-block'>
                    <img id="half-width-test" src={Workshop} alt="Printed mobile screens in a workshop covered in post-its with people's feedback" />
                    <img id="half-width-test" src={WorkshopSB} alt="Storyboard in a service design workshop stretched across the whole wall covered in feedback" />
                </div>

                <div className='full-width-content-block'>
                    <img className="full-width-test" src={WalkFlows} alt="A diagram showing the Figma screens of one pathway through the bookng system, and booking amendments, for a walk-on paggenger" />
                </div>  

                <div className='full-width-content-block'>
                    <img className="full-width-test" src={UserBooking} alt="A person sitting at a table holding a phone showing the Interislander booking system" />
                </div>

                <div className='full-width-content-block'>
                    <div>
                        <div className='next-project-bar'>
                            <div className='back'>
                                <Link to="/work" className="med-link">&#8592;&emsp;&nbsp;All projects</Link>
                            </div>
            
                            <div className='next'>
                                <Link to="/banking" className="med-link">Next&emsp;&#8594;&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <ContactFooter />
        </div>
    )

}