import React from 'react'
import '../CSS/iB.css';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Hero from '../../Assets/dome.jpg';
// import Home from './home.js';

import IBvid from '../../Assets/ib-video.mp4';
import IBshort from '../../Assets/ib-short.mp4';
import IBinfog from '../../Assets/ib-infog.png'
import Nav from '../../Components/JS/nav2.js';
import IBoffice from "../../Assets/IB_Assets/office_illustration.png";
import Diamond from '../../Assets/diamond.jpg'
import IBbrainstorm from "../../Assets/IB_Assets/brainstorm.jpg";
import IB_c1img1 from "../../Assets/IB_Assets/concept1_img1.png";
import IB_c1img2 from "../../Assets/IB_Assets/concept1_img2.png";
import IB_c1img3 from "../../Assets/IB_Assets/concept1_img3.png";
import IB_c2img1 from "../../Assets/IB_Assets/concept2_img1.png";
import IB_c2img2 from "../../Assets/IB_Assets/concept2_img2.png";
import IB_c2img3 from "../../Assets/IB_Assets/concept2_img3.png";
import IB_c3img1 from "../../Assets/IB_Assets/concept3_img1.png";
import IB_It1 from "../../Assets/IB_Assets/it1.png";
import IB_vSketch1 from "../../Assets/IB_Assets/IB-Vis-Sketch1.jpg";
import IB_vSketch2 from "../../Assets/IB_Assets/IB-Vis-Sketch2.jpg";
import IB_vSketch3 from "../../Assets/IB_Assets/IB-Vis-Sketch3.jpg";
import IB_vIt4 from "../../Assets/IB_Assets/IB-Vis-It4.png";
import IB_vIt5 from "../../Assets/IB_Assets/IB-Vis-It5.png";
import IbIt1 from '../../Assets/ib-it1.mp4';
import IbIt2 from '../../Assets/ib-it2.mp4';
import IbIt3 from '../../Assets/ib-it3.mp4';
import IbIt4 from '../../Assets/ib-it4.mp4';
import IBhome from '../../Assets/IB_Assets/IB-homepage.png';
import IBtest from '../../Assets/IB_Assets/testing-illustration.png';
import IBtestdet1 from '../../Assets/IB_Assets/IB-testdet1.png';
import IBtestdet2 from '../../Assets/IB_Assets/IB-testdet2.png';
import IBtestdet3 from '../../Assets/IB_Assets/IB-testdet3.png';
import IBtestdet4 from '../../Assets/IB_Assets/IB-testdet4.png';
import IBtestdet5 from '../../Assets/IB_Assets/IB-testdet5.png';
import IBtestdet6 from '../../Assets/IB_Assets/IB-testdet6.png';
import IBeq1 from "../../Assets/IB_Assets/monitor-illustration.png";
import IBeq2 from "../../Assets/IB_Assets/headphones-illustration.png";




export default function IncognitoBreathing() {
    return (
        <div className="page">

            <Nav />
            <div className="content">
                <div className="IB-Overview">
                    <h1 className="project-title-main">Incognito Breathing</h1>
                    <div className="IB-Intro">
                        <video className='iB-hero-vid'  loop muted controls>
                            <source src={IBvid} type='video/mp4' />
                        </video>
                        <p className="ov-paragraph">
                            Incognito Breathing is a concept website designed to manage workplace stress.
                            Inspired by psychology research, Incognito Breathing generates subtle breath-pacing visualisations based on your own digital workspace.
                            As the visualisations are based on the user's own workspace, the website can easily be used in open plan offices without drawing unwanted attention from co-workers.
                        </p>
                    </div>
                </div>

                <div className="IB-The-Problem">
                    <h2 className="project-subtitles">The Problem</h2>
                    <img id="iBoffice" src={IBoffice} alt="Open-plan office illustration" />
                    <p className="body-content">
                        Manfred Garhammer wrote in 2002 that half of German office workers felt time pressured - up from a quarter in 1990. Open-plan offices in particular can cause fatigue and stress, even at normal volume levels as found by Witterseh, Wyon, & Clausen in 2002.
                    </p>
                    <p className="body-content">
                        Paced respiration (deep, slow breathing from the diaphragm) helps manage stress and anxiety. Slowing, deep breathing lowers heart rates and prevents a state of hyperventilation from habitual over-breathing. Using paced respiration to manage anxiety is especially effective if it is practiced where the stress occurs, rather than removing yourself from a situation and then completing breath exercises.
                    </p> 
                    <p className="body-content">
                        Staff experiencing stress and anxiety in open plan offices often feel too anxious to take a break, because they may worry people will notice them not working. This can make it difficult to manage stress using this technique.
                    </p>
                </div>

                <div className="IB-The-Solution">
                    <h2 className="project-subtitles">The Solution</h2>
                    <p className="body-content">
                        Incognito Breathing was inspired by the psychology findings of Harris, Katkin, Lick & Habberfield in 1976. They found that paced respiration is easy to learn and very effective in promoting relaxation and reduced stress responses.
                    </p>
                    <p className="body-content">
                        Incognito Breathing is designed to help office workers manage mental health while at work, particularly in open plan offices where it can be more difficult to take a break. Incognito Breathing takes your workspace and applies a paced respiration timer to it, so users can do breathing exercises at right time/right place, without feeling insecure that someone will notice. 
                    </p>
                </div>

                <div className="IB-Discovery">
                    <h2 className="project-subtitles">Discovery Phase</h2>
                    <p className="body-content">
                        This project was for the paper DSDN251 Design Psychology at Victoria University of Wellington. I was given the task to come up with designs based on a Psychology Today article about the benefits of paced respiration for mental health.
                    </p>

                    {/* <img id="diamond" src={Diamond} alt="Dan Nessler's revamped double diamond graphic" /> */}

                    <div id="diamond">
                        <InnerImageZoom src={Diamond} zoomType="click" zoomScale={0.8} />
                    </div>
                    
                    <p className="body-content">
                        I used the Double Diamond framework throughout my design process, beginning with the discovery phase.
                    </p>
                    <p className="body-content">
                        I researched paced respiration and how it is best used, and brainstormed different contexts in which people either feel stressed/anxious, and contexts where I thought paced respiration techniques would have the most benefit.
                    </p>
                    <p className="body-content">
                        Through secondary research techniques I learned about the physiological response of stress and anxiety and how shallow breathing can cause a state of constant hyperventilation, which worsens the problem. Without managing the breath, it can be difficult to manage other symptoms of stress and anxiety. 
                    </p>

                    {/* <img id="iB-brainstorm" src={IBbrainstorm} alt="Mind map from digital notebook" /> */}
                    <div id="iB-brainstorm">
                        <InnerImageZoom src={IBbrainstorm} zoomType="click" zoomScale={0.5} />
                    </div>

                    <p className="body-content">
                        I jotted down some high stress places and situations as shown above. In some environments pressure can be quite consistent and sustained. In particular, I remembered conversations with colleagues in office work who felt their to do list was always growing and it created a sense of time pressure, and resulting stress. I directed my research to stress and anxiety in the office and found out workplaces are becoming more stressful, and that open plan offices contribute to steady increases of stress, fatigue, anxiety and burnout. 
                    </p>
                    <p className="body-content">
                        As well as researching stress in modern office environments, I also looked into Cognitive Behavioural Therapy (CBT), which commonly employs breathing techniques to manage stress, anxiety and burnout. <br/>
                        Paced respiration is used in CBT to prevent/correct overbreathing/hyperventilation, which can cause other physical symptoms such as chest pain. When someone over-breathes, less oxygen to get to the brain due to an overbalance of oxygen and carbon-dioxide. This can cause “dizziness, lightheadedness, confusion, breathlessness, blurred vision, and feelings of unreality.” (Hazlett-Stevens, & Craske, 2008, p.62). <br/>
                        CBT has found that breath retraining helps stress and anxiety disorders, and can help with insomnia, certain kinds of chest pain, headaches, gastrointestinal issues and hypertension.  
                    </p>
                    <p className="body-content">
                        I found out that paced respiration is easily learned and quickly effective, meaning it could easily become a part of someone’s workday routine to great effect. 
                    </p>
                    <p className="body-content">
                        I also looked into other things that inspire relaxation and found that nature sounds had been proven to help with relaxation in office waiting rooms, so kept this in mind as something to potentially include along with the paced respiration.
                    </p>

                    <div className="feature-text-container">
                        <h3 className="feature-text">
                            How might we create a product that helps people relax and manage workplace stress in an office environment, by adding paced breathing techniques into daily routines?
                        </h3>
                    </div>

                    <p className="body-content">
                        I wanted to focus on the aspect of making it a daily routine so that it could have long lasting impacts on breathing and function more as a breath retraining tool, rather than just something that people do when they are feeling their worst. 
                    </p>   
                </div>

                <div className="IB-Ideation">
                    <h2 className="project-subtitles">Ideation</h2>
                    <p className="body-content">I began the process by coming up with three main ideas that could answer the problem question.</p>

                    <div className="iB-concept-container">
                        <div className="IB-Concept1">
                            <div className="ib-c1-text">
                                <h4 className="Concept1-Heading">Concept <br/> One</h4>
                                <div className="Concept-Paragraph">
                                    <p className="body-content">A day planner that puts rest first. </p>
                                    <p className="body-content">Prompts to fill in rest times first (incl. breath exercises).</p>
                                    <p className="body-content">Reminders once it is time to breathe, with a built in breath timer.</p>
                                    <p className="body-content">Options to breathe with audio, visuals or both to help users relax in a style that suited their preferences/environment/ <br/>accessibility needs.</p>
                                </div>
                            </div>
                            <div>   
                                <img className="iB-c1img" src={IB_c1img1} alt="Wellbeing focused digital calendar" />
                                <img className="iB-c1img" src={IB_c1img2} alt="Wellbeing focused digital calendar" />
                                <img className="iB-c1img" src={IB_c1img3} alt="Wellbeing focused digital calendar" />
                            </div>     
                        </div>

                        <div className="IB-Concept2">
                            <div className="ib-c2-bg">
                                <h4 className="Concept2-Heading" id="iB-c2-h4">Concept Two</h4>
                                <div id="ib-c2-imgs-container">
                                    <img className="iB-c2img" src={IB_c2img1} alt="Basic digital wireframes of a breath timer app" />
                                    <img className="iB-c2img" src={IB_c2img2} alt="Basic digital wireframes of a breath timer app" />
                                    <img className="iB-c2img" src={IB_c2img3} alt="Basic digital wireframes of a breath timer app" />
                                </div>
                            </div>    
                            <div className="Concept-Paragraph">
                                <p className="body-content">Concept Two: An app using CBT style paced respiration.</p>
                                <p className="body-content">Aim to provide access to people that may not be able to access this therapy usually. </p>
                                <p className="body-content">Provides education & training on diaphragmatic breathing and coaching on the users own breath. </p>
                                <p className="body-content">Features include reminders & links to health and calendar apps.</p>
                            </div>
                        </div>
                    </div>    

                    <div className="IB-Concept3">
                        <div id="iB-c3-flex">
                            <div id="c3-heading-flex">
                                <h4 className="Concept3-Heading">Concept Three  <br/> </h4>
                                <h4 className="Concept3-Heading"> - </h4>
                                <h4 className="Concept3-Heading">Chosen Concept</h4>
                            </div>    
                            <img id="iB-chosen-img" src={IB_c3img1} alt="Trello screenshot with possible breath timer location identified in top right corner."/>
                        </div>    
                        <div className="Concept-Paragraph">
                            <p className="body-content">A breath timer disguised as a regular productivity website. A subtle animation within the page sets the ideal breath pace, and there should be an audio option as well.</p>
                            <p className="body-content">Features include reminders & links to health and calendar apps.</p>
                            <p className="body-content-bold">After presenting all three designs to a group of people, this design was chosen to further develop as it allowed for habit building and considered some unique environmental factors.</p>    
                        </div>
                    </div>
                </div>

                <div className="Design-Refine">
                    <h2 className="project-subtitles">Ideation</h2>
                    <div className="flex-1">
                        <img id="iB-it1" src={IB_It1} alt="Iteration mockup of site homepage showing possible software for the breath timer to work with"/>
                        <div id="iB-concept-dvpt">  
                            <h2 className="project-subtitles">Concept Development</h2>
                            <p className="body-content">Initial concepts had popular productivity software backgrounds for users to choose.</p>
                            <p className="body-content">The final design lets users upload screenshots instead that the breath timer overlays. <br/>
This allows for anyone to use the site, regardless of their office software.</p>
                        </div>         
                    </div>  
                     
                        <div className="IB-Vis-Process">
                            <div className="Designing-Visualisation">
                                    <h2 className="project-subtitles">Designing Visualisation</h2>
                                    <div>
                                        <p className="body-content">The animation for the breath timer needed to be:</p>
                                        <ul className="body-content">Subtle enough that co-workers wouldn’t really notice it</ul>
                                        <ul className="body-content">Aid the sense of calm in visuals and audio</ul>
                                        <ul className="body-content">Easy to breathe along with</ul>
                                        <p className="body-content">Iterations were sketched, and mocked up and tested in After Effects/Premiere Pro.</p>
                                        <p className="body-content">I explored obscuring the screenshot in subtle ways, to take the user away from their work.</p>
                                    </div>
                                </div> 
                            <div className id="iB-sk1">
                                {/* <img className="iB-vis-sketches"  src={IB_vSketch1} alt="Visualisation idea sketch"/> */}
                            </div>
                            <div className id="iB-sk2">
                                {/* <img className="iB-vis-sketches" id="iB-sk2" src={IB_vSketch2} alt="Visualisation idea sketch"/> */}
                            </div>
                            <div className id="iB-sk3">
                                {/* <img className="iB-vis-sketches" id="iB-sk3" src={IB_vSketch3} alt="Visualisation idea sketch"/> */}
                            </div>
                            <div className id="iB-sk4">
                                {/* <img className="iB-vis-sketches" id="iB-sk4" src={IB_vIt4} alt="Visualisation digital mockup"/> */}
                            </div>
                            <div className id="iB-sk5">
                                {/* <img className="iB-vis-sketches" id="iB-sk5" src={IB_vIt5} alt="Visualisation digital mockup"/> */}
                            </div>
                            
                            <source src={IbIt1} type='video/mp4' />
                            <source src={IbIt2} type='video/mp4' />
                            <source src={IbIt3} type='video/mp4' /> 
                        </div>
                        
                    </div>
                </div>

                <div className="prototype">
                    <h2 className="project-subtitles">Building the Prototype</h2>
                    <p className="body-content">
                        Once I had finalised how the visualisation would work, I needed to build a prototype for testing. The user would need to feel as though they were taking and uploading a screenshot, but rather than sinking a lot of time into an untested product, the prototype would actually use the preexisting animated visualisation I had created.<br/>
                        To achieve this, I built the prototype in html & css, with a feature that would let them drag & drop or select a file to “upload”, but I would provide the user with the site to screenshot so it matched the background. When they clicked go, it would simply take them to the visualisation video.
                    </p>
                    <img id="iBhome" src={IBhome} alt="Screenshot of homepage"/>
                    <source src={IbIt4} type='video/mp4' />
                    <p id="iBhomeLabel">Chosen Animation - breath timing bubble displays at the top of the window</p>
                </div>
            
                <div className="User-Testing">
                    <h2 className="project-subtitles">User Testing</h2>
                        <img id="ib-testing-illustration" src={IBtest} alt="Illustration of someone in user testing session"/>
                    <p className="body-content">
                        As a requirement for this project, testing needed to be conducted using psychology methodology. I wanted to measure stress, recovery and environmental concerns of working in a fast-paced, open plan office environment, and needed to consider how I would measure states of stress and restfulness, and factors to control for to ensure the test would be fair.
                    </p>    
                    <div className="iB-reqs-container">
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How well does the visualisation help with relaxation?</h4>
                            <h5 className="IB-testing-subheadings">Method options:</h5>
                            <p className="body-content">Self-reporting, biometric testing</p>
                            <h5 className="IB-testing-subheadings">Controls & considerations:</h5>
                            <p className="body-content">Differences in headphones and how much noise they block out - participants asked to bring their usual headphones so the difference in sound when they put them on is what they’re already used to.</p>
                            <p className="body-content">How to create a sense of pressure similar to working at crunch time. </p>
                            <p className="body-content">
                                When to measure heart rate for consistency.<br/>
                                How successfully people can relax after completing a pressured task, with and without the device.
                            </p>
                        </div>
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How comfortable are people to use the site with others around?</h4>
                            <h5 className="IB-testing-subheadings">Method options:</h5>
                            <p className="body-content">Self-reporting/interview</p>
                            <h5 className="IB-testing-subheadings">Controls & considerations:</h5>
                            <p className="body-content">
                                Testing in an environment as similar to an open plan office. <br/>
                                Ensuring that some testing/feedback is from people that have/currently work in this environment.
                            </p>                     
                        </div>
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How usable & enjoyable is the site?</h4>
                            <h5 className="IB-testing-subheadings">Method options:</h5>
                            <p className="body-content">Interview, observation </p>
                            <h5 className="IB-testing-subheadings">Controls & considerations:</h5>
                            <p className="body-content">
                                Test should be conducted the same way for all participants.
                                Navigation prompts should not be given by the tester.
                            </p>
                            <p className="body-content">
                                At this time usability is a secondary focus, as I need confirmation that the device can help participants with relaxation before focusing on finer points of user flows within the product. 
                            </p>
                        </div>
                    </div>

                    <div className="IB-test-design">
                        <h2 className="project-subtitles">Designing The Test</h2>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet1} alt="calender icon with two days blocked out"/>
                            <h5 className="IB-testing-subheadings">Two Days of Testing</h5>
                            <p className="body-content">Day 1: Control test</p>
                            <p className="body-content">Day 2: Test with Incognito Breathing visualisation</p>
                        </div>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet2} alt="Illustration of someone in user testing session"/>
                            <h5 className="IB-testing-subheadings">Four Participants</h5>
                            <p className="body-content">
                                2 male and 2 female participants.<br/> 
                                The same participants on both days.</p>
                        </div>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet3} alt="Illustration of someone in user testing session"/>
                            <h5 className="IB-testing-subheadings">Setting</h5>
                            <p className="body-content">The test will be set in an environment similar to an open office.</p>
                        </div>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet4} alt="Illustration of someone in user testing session"/>
                            <h5 className="IB-testing-subheadings">Time-Pressured Task</h5>
                            <p className="body-content">To simulate stress and elevate heart rate, participants complete as many maths equations as possible in 2 minutes.</p>
                        </div>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet5} alt="Illustration of someone in user testing session"/>
                            <h5 className="IB-testing-subheadings">Heart Rate Monitoring</h5>
                            <p className="body-content">Heart rate is monitored throughout both sessions and is recorded at resting, the highest point, at the end of the pressured task, and the lowest point.</p>
                        </div>
                        <div className="Test-Details">
                            <img className="testDetailIcons" src={IBtestdet6} alt="Illustration of someone in user testing session"/>
                            <h5 className="IB-testing-subheadings">Timed Unwinding</h5>
                            <p className="body-content">After the time pressured task, participants are timed how long it takes to return to their resting heart rate.</p>
                        </div>
                    </div>

                    <div className="Equipment">
                        <h2 className="project-subtitles">Equipment</h2>
                        return <img src={IBeq1} alt="Illustration of a hand using a finger-clamp style heart rate monitor"/>;
                        <p className="body-content">To measure stress responses, on both days participants wore a finger clamp that takes pulse.</p>
                        <p className="body-content">Participants used their own headphones to test audio features such as ocean sounds so results wouldn’t be skewed by better or worse audio quality than they were used to. </p>
                        return <img src={IBeq2} alt="Illustration of a hand using a finger-clamp style heart rate monitor"/>;
                    </div>

                    <div className="Additional Test">
                        <h2 className="project-subtitles">Additional Test</h2>
                        <p className="body-content">I also had an office worker test the visualisation in their workplace. This was an observational study to investigate subjective experience using the visualisation in an open-plan office.  One male participant used the visualisation at two different times during their workday in their usual place of work, with their own headphones.</p>
                        <p className="body-content">At the end of their workday they participated in a semi-formal interview and answered the following questions:</p>
                        <ul>“Can you describe your experience using the visualisation?”</ul>
                        <ul>“Do you think it helped you relax?”</ul>
                        <ul>“Do you think it helped you subsequently focus?”</ul>
                        <ul>“Did you feel self-conscious or aware of your colleagues while using the design?”</ul>
                    </div>

                </div>

                <div className="Results">
                    <h2 className="project-subtitles">Results</h2>
                    <h2 className="project-subtitles">PUT GRAPH IN HERE</h2>
                    <h2 className="project-subtitles">Quotes from participants</h2>
                    <div className="feature-text">
                        <h3>
                            "[I felt] content, calm and unworried. I wasn't distracted with what I was doing before."
                        </h3>
                    </div>
                    <div className="feature-text">
                        <h3>
                            "I would be happy to use the site. It's non-invasive. You can show your own desktop or what you're working on and people won't ask questions. You can chuck headphones on and be in your own space for a bit. "
                        </h3>
                    </div>

                    <div className="feature-text">
                        <h3>
                            I wouldn't worry about using it around other people, It has a simple ui so you can kind of just do it on the screen and it guides you. You wouldn't need to explain to anyone. 
                        </h3>
                    </div>
                    <p className="body-content">Most users felt they would be comfortable using the site in an open plan office and found that it did help them relax. <br/> 
                    One participant wanted to be able to breathe slower than the default, which would be easy to incorporate into future iterations of the design. There was also mixed feedback about the audio feature, with some people liking it and others finding it distracting. It would be good to have more customisation for this feature in future iterations.</p>
                    <p className="body-content">In addition to the user testing sessions, one further person was asked to test the site in their own workplace and interviewed about their experience.</p>
                    <p className="body-content">Below are some quotes from the post-test interview.</p>  
                    <div className="feature-text">
                        <h3>
                            "I felt good [after using the site]. It was nice to stop in the middle of work and do it. It was quite calming not to think about what you were working on and watch the visualisation. <br/>
                            I could definitely incorporate it into my normal workday. I end up staring at code for a length of time to work something out anyway, so no one would be able to tell if I was staring at the bubble instead to calm down.<br/>
                            It helped me relax - it made me stop thinking about what I was doing at the time and zone out a little bit and helped me focus after."
                        </h3>
                    </div>      
                    <p className="body-content">It was encouraging to see that the visualisation achieved its goals of helping people to relax in a high-pressure situation, and it was even more encouraging that those that tested it felt they would feel comfortable using the device in their workplace.</p>     
                </div>

                <div className="Future Developments">
                    <p className="body-content">Small improvements:</p>
                    <ul>Improve audio features by ensuring timing is beautifully in sync, and that there are different options for audio that include nature sounds, as well as clearer breath guidance for those that don’t want to use/can’t use the visual features.</ul>  
                    <ul>Other accessibility options such as visual only, audio only and different animations that are easier for low vision users to see.</ul>  
                    <p className="body-content">Larger features to improve:</p>
                    <ul>Improve and test website interface and create and test a proper onboarding experience.</ul>  
                    <ul>Develop prototype so it can take the picture, add it as background image, and then lay animation over the top in an appropriate place by detecting contrast.</ul> 
                </div>
            </div>
            
    );
} 
