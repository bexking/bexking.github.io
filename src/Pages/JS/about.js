import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/about.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import SelfPortrait from '../../Assets/self.png'

export default function About() {
    return (
        <div>
           <div className="work-feature">
                <div id='feature-section'>
                    <img id="self-portrait" src={SelfPortrait} alt="Illustration of Bex in monochromatic brown. She has curly hair and round glasses." />
                    <div className='bio-container'>
                        <h1 id="bio-h1">Ko wai ahau?</h1>
                        <p className='intro-large'>
                            Ko Bex King ahau. Ko Ngāti Porou te iwi. No Kōtirana (Scotland), no Te Tairāwhiti ōku tīpuna.</p>
                        <p className='intro-large'>
                            I'm a multi-disciplinary designer based in Te-Whanganui-a-Tara, experienced and passionate about UX/UI, visual design, service design and research.
                            I love creating exceptional, human-centred experiences that weave beauty and practicality together, making complexity feel simple.
                        </p>
                        <p className='intro-large'>add what kind of work I'm interested in</p>
                        <p className='intro-large'>
                            When I’m not doing mahi I spend most of my time at live music, or at home knitting or learning raranga (weaving).
                        </p>
                        <div className="info-bullets">
                            <div className="info-bullet-group">
                                <h5 className='xp'>Skills</h5>
                                <ul>
                                    <li className='xp-para'>UX/UI design</li>
                                    <li className='xp-para'>User research and testing</li>
                                    <li className='xp-para'>Qualitative research</li>
                                    <li className='xp-para'>Visual design</li>
                                    <li className='xp-para'>Web design (HTML, CSS, JS)</li>
                                </ul>    
                            </div>

                        <div className="info-bullet-group">
                            <h5 className='xp'>Education</h5>
                                <ul className='xp-para'>
                                    <li className='xp-para'>
                                        Bachelor of Design Innovation (Interaction Design) 
                                        <p className='p-attribution'>Victoria University of Wellington, 2021</p>
                                    </li>
                                    <li className='xp-para'>
                                        Certificate in Māori Protocol and Language (Level 4)
                                        <p className='p-attribution'>Te Wānanga o Raukawa, 2021</p>
                                    </li>
                                </ul>                       
                        </div>
                        <div className="info-bullet-group">
                            <h5 className='xp'>Resume</h5>
                            <ul className='xp-para'>
                                <li className='xp-para'>
                                <a href="" className='Underlined-Link'>Download</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactFooter />
    </div>
    )
}
