import React from 'react'
import '../CSS/projectPage.css';
// import Sidebar from '../../Components/JS/nav.js'
import HintsVid from '../../Assets/engoo-hints.mp4';
import HintFlow1 from '../../Assets/hints-uf-sbs.png';
import HintFlow2 from '../../Assets/hints-uf-delayed.png';
import HintHero from '../../Assets/hints-hero.png';
import EngooUser1 from '../../Assets/engoo-p1.png';
import EngooUser2 from '../../Assets/engoo-p2.png';
import EngooUser3 from '../../Assets/engoo-p3.png';
import EngooUser4 from '../../Assets/engoo-p4.png';
import EngooUser5 from '../../Assets/engoo-p5.png';
import EngooUser6 from '../../Assets/engoo-p6.png';
import EngooDP1 from '../../Assets/engoo/engoo-dp-1.jpg';
import EngooDP2 from '../../Assets/engoo/engoo-dp-2.jpg';
import EngooDP3 from '../../Assets/engoo/engoo-dp-3.jpg';
import EngooDP4 from '../../Assets/engoo/engoo-dp-4.jpg';
import EngooDP5 from '../../Assets/engoo/engoo-dp-5.jpg';
import EngooDP6 from '../../Assets/engoo/engoo-dp-6.jpg';
import EngooDP7 from '../../Assets/engoo/engoo-dp-7.jpg';
import EngooDP8 from '../../Assets/engoo/engoo-dp-8.jpg';
import EngooDP9 from '../../Assets/engoo/engoo-dp-9.jpg';
import EngooDP10 from '../../Assets/engoo/engoo-dp-10.jpg';
import EngooDP11 from '../../Assets/engoo/engoo-dp-11.jpg';
import EngooDP12 from '../../Assets/engoo/engoo-dp-12.jpg';
import EngooDP13 from '../../Assets/engoo/engoo-dp-13.jpg';
import EngooDP14 from '../../Assets/engoo/engoo-dp-14.jpg';
import EngooDP15 from '../../Assets/engoo/engoo-dp-15.jpg';
import EngooDP16 from '../../Assets/engoo/engoo-dp-16.jpg';
import Nav from '../../Components/JS/nav2.js';



export default function Hints() {
    return (
        <div className="page">

            <Nav />
            
            <div className="content">
                <h1 className="projecth1" id="hints-main-title">Language Learning Hints with Engoo</h1>
                <p>A proposed hint-system to help English-learners form stronger memories of the words they're learning while using the Daily News lesson material.</p>
            
                <img src={HintHero} alt="image of add drawing hint section" className="main-project-image" />

                <div className="problem">
                    <h3 className="projecth3">Background</h3>
                    <p>Engoo is an online English learning platform, providing one-on-one, conversation based lessons.</p>
                    <p>The site has a Daily News section as learning material. It allows users to select a simplified
English news article, highlights key vocabulary and provides discussion points to help practise English and improve retention. At the intermediate level, there are translations available for Engoo’s biggest markets to help with comprehension if they become stuck.
                    Daily News is the most popular learning material on the site.
                    </p>
                    <p>While the translation feature has potential, the user flow is difficult and harms the user experience.</p>
                    <p>There are two main ways users engage with this feature - "sentence by sentence" or reading all English text first, and checking against their native language.</p>

                    <h3 className="projecth3">User Flows</h3>
                    <div className="center-img">
                        <img id="hint-flow1" src={HintFlow1} alt="user flows sentence by sentence" />
                    </div>
                    <p>This is the user flow when trying to translate sentence by sentence. Sentence by sentence is the ideal translation method for students to learn the material.</p>
                    <p>To read this way, users must frequently scroll up and down between English and their native language.</p>
                    <p>When reading the text in their native language, it is easy to accidentally read too far ahead and get spoilers, as the translation is presented in one block of text. This ruins the challenge for the rest of the exercise.</p>
                    <div className="center-img">
                        <img id="hint-flow2" src={HintFlow2} alt="user flows one at a time" />
                    </div>
                    <p>This second example is the way most users currently behave as a reaction to the inconvenient UX when translating sentence by sentence.</p>
                    <p>When using as a form of feedback about comprehension, the disconnection between the English text and the translation may inhibit learning outcomes, as it delays feedback. According to a study by Zhi, et al. (2016),​ ​immediate feedback is more successful than delayed feedback when learning languages. They found that the effects of immediate feedback were more present after two weeks than when feedback was delayed.</p>
                    <p>Problems exist mainly for students using Engoo. Though there may be residual problems for tutors, such as disrupted lessons from the poor flow, these problems for teachers would be resolved through a good solution for students.</p>
                    <h3 className="projecth3">User Personas</h3>
                    <p>Engoo’s main customer groups are represented below as personas.
                        <br/>
                       <br/> ● A large number of students are from Japan and South Korea.
                       <br/>● Many Engoo users engage with the site on mobile devices.
                       <br/>● Daily news is provided for the intermediate-advanced level users, but only intermediate level
                            articles have a translation option, so the user groups most affected are 1, 2, and 5.</p>
                    <div className="hint-personas">
                        <img id="hints-persona-1" className="hint-persona-img" src={EngooUser1} alt="user personas of engoos main customers" />
                        <img id="hints-persona-2" className="hint-persona-img" src={EngooUser2} alt="user personas of engoos main customers" />
                        <img className="hint-persona-img" src={EngooUser3} alt="user personas of engoos main customers" />
                        <img className="hint-persona-img" src={EngooUser4} alt="user personas of engoos main customers" />
                        <img id="hints-persona-5" className="hint-persona-img" src={EngooUser5} alt="user personas of engoos main customers" />
                        <img className="hint-persona-img" src={EngooUser6} alt="user personas of engoos main customers" />
                    </div>
                </div>

                <div className="process">
                    <h3 className="projecth3">Project Goals</h3>
                    <p>
                    The solution must: <br/>
                    <br/>
                        ● Provide a translation experience for the Daily News learning materials with a better user flow that
                        creates better opportunities for language learning.<br/>
                        ● Work well with the translation languages Engoo supports, regardless of how much space the language takes up.<br/>
                        ● Allow users to access more immediate translation feedback, with minimal scrolling backwards
                        and forwards.<br/>
                        ● Retain a “news-feel” - the page should feel like a news article.<br/>
                        ● Be responsive so it works on a range of devices.<br/>
                        ● Be easy to use for less technically proficient users.
                    </p>

                    <p>
                    In addition to user flow issues, there may be additional features that could improve memory and reduce the reliance on the translation, creating better long-term learning. Gleitman, et al. (2010)​ ​identify successful acquisition, storage and retrieval as required components to remembering. The solution should find ways to incorporate some of these principles to provide better long term comprehension.
                    </p>
                </div>


                <div className="process">

                    <h3 className="projecth3">Design Process</h3>
                    <p>Breaking open the brief. Primary and secondary research and ideation</p>
                    <p>
                    After research, I began with sketches before digital prototypes. Early on I had the idea to use the space between paragraphs to break up the translated text. This concept was inspired by spoiler tags and sought to meet Engoo’s need to have a better flow when interacting with the translation, without disrupting the “news-feel” of the page.
                    </p>

                    <p>Memory acquisition requires active engagement. Shallow acquisition will create shallow memories. -Gleitman et. al
                        This led to a second concept that allowed users to input their own hints to create stronger memories.
                    </p>

                    <div className= "hint-dp">
                        <img className="hint-sketches" src={EngooDP1} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP2} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP3} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP4} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP5} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP6} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP7} alt="sketchbook" />
                    </div>

                    <h3 className="projecth3">Design Process</h3>
                    <p>Further development of ideas</p>

                    <div className= "hint-dp">                      
                        <img className="hint-sketches" src={EngooDP8} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP9} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP10} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP11} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP12} alt="sketchbook" />
                    </div>

                    <h3 className="projecth3">Design Process</h3>
                    <p>Creating Digital version and prep for testing</p>

                    <div className= "hint-dp">                      
                        <img className="hint-sketches" src={EngooDP13} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP14} alt="sketchbook" />
                    </div>                   
                </div>

                <div className="process">
                    <h3 className="projecth3">Testing</h3>
                    <p>Paper prototypes were used for user testing to get feedback on the initial hint system. Paper prototyping worked well here as it allowed users to fill in their own hints easily while using the prototype.</p>
                    <p>Comparison tests were done between the two concepts as I was concerned that the design with multiple ways to add hints might be overwhelming for users.</p>
                    <p>Users were asked to learn vocabulary and then identify their words and meaning within the article.</p>
                    <div className= "hint-dp"> 
                        <img className="hint-sketches" src={EngooDP15} alt="sketchbook" />
                        <img className="hint-sketches" src={EngooDP16} alt="sketchbook" />
                    </div>
                </div>

                <div className="features">
                    <h3 className="projecth3">Design Features</h3>
                    <p>The solution to the problem was coming up with a new hint system for the Daily News learning materials. <br/>
                        The system allows users to add their own, personalised prompts and hints for specific words they are trying to learn.
                        Users can add links, text, images or audio as hints, giving them a wide range of options to help remember in their own way. <br/>
                        Translations are available between paragraphs to make them an easy companion to reading.
                    </p>

                    <video className='heroVid' autoPlay loop muted controls>
                        <source src={HintsVid} type='video/mp4' />
                    </video>
                </div>

                <div className="finalImages">
                    <div className="final-images" id="fin1"></div>
                    <div className="final-images" id="fin2"></div>
                </div>
            </div>
        </div>
    )
}
