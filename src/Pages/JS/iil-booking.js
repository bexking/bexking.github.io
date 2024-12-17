import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import UserBooking from '../../Assets/iil/iil-booking-table.jpg';

export default function iilBooking() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>Interislander</span>
                        <h1 className='long-project-title'>Streamlining & simplifying customers’ booking experience</h1>
                        <p className='type-of-work'>UX/UI, Information Architecture, Service Design</p>
                        <p>I worked with Interislander to redesign their booking system after identifying that the existing site needed work to support current and future business goals, improve usability, and prevent customer drop-off. 
                        </p>
                        <p>This mahi was part of ongoing service design work with the CX team. I participated in the service design process, using insights from this work and the digital marketing team to inform requirements. I reviewed the existing site, redesigned the information architecture, and created mid-fidelity digital prototypes with a colleague to bring the design to life.</p>
                        <p>At project completion, Interislander’s usual digital agency received the prototypes for final refinement and development. Reportedly, the new design saw the total booking time halved during internal testing. The new booking system went live in November, 2024.</p>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={UserBooking} alt="A person sitting at a table holding a phone showing the Interislander booking system" />
                    </div>
                </div> 

                <div className='full-width-content-block'>
                    
                </div>

                <div className='full-width-content-block'>
                    
                </div>  
            </div>
            <ContactFooter />
        </div>
    )

}