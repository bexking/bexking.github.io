import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/about.css';

export default function About() {
    return (
        <div>
            <div id="about-page">

            <div className="intro">
                <div className="intro-text">
                    <h1 className="homeh1">About me</h1>
                    <h2 className="homeh2">Ko Bex King ahau</h2>
                </div>
            </div>

                <div className="homepage">
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
                    <p className="homepage-p">Check out my <Link to="#workworkwork" className="homepage-links"  id="homepage-link1">work</Link> and get in touch at <a href="mailto:bexkingdesign@gmail.com"  className="homepage-links" id="homepage-link2">bexkingdesign@gmail.com</a>. </p>
                    <p className="homepage-p">Ngā mihi nui</p>
                </div>
            </div>    
        </div>
    )
}
