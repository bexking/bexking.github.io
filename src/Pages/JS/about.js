import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/about.css';
import Me from '../../Assets/self.png'

export default function About() {
    return (
        <div>
            <div id="about-page">

            <div className="intro2">
                    <img id="me" src={Me} alt="illustration of Bex" />
                    <h1 className="abouth1">About me</h1>
            </div>

                <div className="homepage">

                    <div className='pepeha'>
                        <p className='pepeha-line'>Ko Marotiri te maunga. Ko Mangahauini te awa.</p>
                        <p className='pepeha-line'>Ko Horouta te waka. Ko Ngāti Porou te iwi.</p>
                        <p className='pepeha-line'>Ko Bex tōku ingoa</p>
                    </div>
                    <p className="homepage-p">I’m currently a Kaitātai (Designer) at ThinkPlace, a for-purpose design consultancy based in Te-Whanganui-a-Tara.</p>
                    <p className="homepage-p">
                        I love using design to create better, more inclusive experiences for people, especially those who are often overlooked. I believe empathy and open-mindedness are crucial to getting to the root of a problem, and support finding the best solutions.
                    </p>
                    <p className="homepage-p">
                        Before working for ThinkPlace, I worked a Visual Merchandising Co-ordinator for LUSH Fresh Cosmetics Australia & NZ, where I found my passion for design thinking. I hold a Bachelor of Design Innovation from Victoria University of Wellington, majoring in Interaction Design.
                    </p>


                    <p className="homepage-p">
                        When I’m not designing, I can be found out at gigs, or at home, knitting, reading, or learning raranga (weaving) or Te Reo Māori. 
                    </p>             
                    <p className="homepage-p">Check out my <Link to="/home" className="homepage-links">work</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links">bexkingdesign@gmail.com</a>. </p>
                    <p className="homepage-p">Ngā mihi nui,</p>
                    <p className="homepage-p">Bex King</p>
                    <div className="info-bullets">
                        <div className="info-bullet-group">
                            <h5 className='xp'>Skills</h5>
                            <hr></hr>
                            <p className='xp-para'>User experience design</p>
                            <p className='xp-para'>User interface design</p>
                            <p className='xp-para'>Human-centered design</p>
                            <p className='xp-para'>User research & testing</p>
                            <p className='xp-para'>Qualitative research</p>
                            <p className='xp-para'>Visual design</p>
                        </div>
                        <div className="info-bullet-group">
                            <h5 className='xp'>Education</h5>
                            <hr></hr>
                            <div className="edu-para">
                                <p className='xp-para-edu'>Bachelor of Design Innovation (Interaction Design)</p>
                                <p className='xp-para-edu'>Victoria University of Wellington</p>
                                <p className='xp-para-edu'>2018-2020</p>
                            </div>
                            <div>
                                <p className='xp-para-edu'>Certificate in Māori Protocol and Language (Level 4)</p>
                                <p className='xp-para-edu'>Te Wānanga o Raukawa</p>
                                <p className='xp-para-edu'>2021</p>
                            </div>
                        </div>
                        <div className="info-bullet-group">
                            <h5 className='xp'>Resume</h5>
                            <hr></hr>
                            <p className='xp-para'>Available on request</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
