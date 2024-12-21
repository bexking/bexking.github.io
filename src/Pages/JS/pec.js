import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import Desk from '../../Assets/pec/pec-desk.jpg';
import { Link } from "react-router-dom";

export default function Pec() {
    return (
    <div> 
        <div className="project-page">           
            <div className='project-heading-container'>
                <div className="text-block-third">
                    <span>Ministry of Education</span>
                    <h1 className='long-project-title'>Testing and refining a new eligibility criteria for Principal appointment in Aotearoa</h1>
                    <p className='type-of-work'>Qualitative Research, Co-design</p>
                </div>
                <div className="hero-two-thirds">
                    <img id="test-image1" src={Desk} alt="Principal eligiblity criteria and its introductory page sitting on a desk in landscape A4" />
                </div>
            </div> 
            <div className='body-copy'>
                <p>
                    For this work I helped develop and deliver a consultation to test a Principal Eligibility Criteria to be used when appointing principals in Aotearoa. Following the Tomorrow’s Schools review, the Ministry of Education were required to develop eligibility criteria for principal appointment. The only existing standard requirements were holding a Teachers Practising Certificate (not a full teaching certificate).
                </p>
                <p>
                    During this project I assisted with project management, research, and design. Main tasks included creating and monitoring online feedback forms (for school board members, teachers and principals, and the general public), design and facilitation of tailored online workshops (for school board members and principals) which included having participants test applying the criteria on a variety of personas, and prototyping potential supporting tools for implementation. 
                </p>
                <p> 
                    During the consultation we sought to understand how well the draft criteria covered the role of a principal, how reasonable and achievable the criteria were, how well they could be understood and applied by school boards, and to determine how concrete/flexible the criteria should be, and how basic/aspirational. 
                </p>
                <p>
                    Once all research was gathered, I supported qualitative analysis and synthesis to be presented to the group of drafters for development of the final draft. The final criteria were broken down into four pou representing the different areas of leadership Principals are expected to uphold. In order to strike a balance between different opportunities potential Principals may have during their career, within the pou, criteria were broken into non-negotiable things applicants must have experience in, and things they must have a non-negotiable commitment to, with room to gain experience in future.
                </p>
            </div>
            
            <div className='full-width-content-block'>
                <div>
                    <div className='next-project-bar'>
                        <div className='back'>
                            <Link to="/businessecosystem" className="med-link">&#8592;&emsp;&nbsp;Previous</Link>
                        </div>
        
                        <div className='next'>
                            <Link to="/hintswithengoo" className="med-link">Next&emsp;&#8594;&nbsp;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactFooter />
    </div>
    )
}