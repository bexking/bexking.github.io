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
                        <h1>Ko wai ahau?</h1>
                        <p>
                            Ko Bex King ahau. Ko Ngāti Porou te iwi. No Kōtirana (Scotland), no Te Tairāwhiti ōku tīpuna.</p>
                        <p>
                            I'm a multi-disciplinary designer based in Te-Whanganui-a-Tara who loves design work that comes with challenge and variety. 
                            I’m passionate about creating thoughtful UX/UI experiences, and conducting robust research. I also have experience in service design and graphic design. 
                        </p>
                        <p>I’m at my best when I can bring these skills together to create informed, user-centred designs which weave together beauty and pragmatism. I’m energised by complex and complicated problems and the opportunity to make the complex seem simple for users.</p>   
                        <p>When I’m not designing I can often be found at local live music events, or knitting up a storm at home.</p>
                    </div>
                </div>
                <div className="info-bullets">
                            <div className="info-bullet-group">
                                <h2 className='xp'>Skills</h2>
                                <ul>
                                    <li className='xp-para'>UX/UI design</li>
                                    <li className='xp-para'>Research - UX, qualitative, thematic analysis</li>
                                    <li className='xp-para'>Prototyping - digital, physical</li>
                                    <li className='xp-para'>Graphic design</li>
                                    <li className='xp-para'>Web design (HTML, CSS, ReactJS)</li>
                                </ul>    
                            </div>

                            <div className="info-bullet-group">
                                <h2 className='xp'>Education</h2>
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
                                <h2 className='xp'>Resume</h2>
                                <ul className='xp-para'>
                                    <li className='xp-para'>
                                    <a href="" className='Underlined-Link'>Download</a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
            </div>
        <ContactFooter />
    </div>
    )
}
