import React from 'react'
import '../CSS/iB.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Homepage from "../../Assets/IB_Assets/homepage.png";
import ibofficemockup_1 from "../../Assets/IB_Assets/ib-office-mockup_1.png";
import IbVideo from "../../Assets/IB_Assets/ib-video.mp4";
import IbConcept1 from "../../Assets/IB_Assets/ib-concept1.png";
import IbConcept2 from "../../Assets/IB_Assets/ib-concept2.png";
import IbConcept3 from "../../Assets/IB_Assets/ib-concept3.png";
import IbIt1 from "../../Assets/IB_Assets/ib-it1.gif";
import IbIt2 from "../../Assets/IB_Assets/ib-it2.gif";
import IbIt4 from "../../Assets/IB_Assets/ib-it4.gif";
import TestIcon1 from "../../Assets/IB_Assets/test-icon1.png";
import TestIcon2 from "../../Assets/IB_Assets/test-icon2.png";
import TestIcon3 from "../../Assets/IB_Assets/test-icon3.png";
import TestIcon4 from "../../Assets/IB_Assets/test-icon4.png";
import TestIcon5 from "../../Assets/IB_Assets/test-icon5.png";
import TestIcon6 from "../../Assets/IB_Assets/test-icon6.png";
import Results from "../../Assets/IB_Assets/ib-results.png";
import SeeMore from "../../Components/JS/see-more.js"

export default function IncognitoBreathing() {
    return (
        <div id="top">

            <div className="page" id="page-ib">
                <div>

                    <div className="ib-hero-container">
                        <div className="ib-video-section">
                            <video className="vid" autoPlay muted controls playsInline>
                                <source src={IbVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <h1 className="project-heading" id="ib-heading">Incognito Breathing</h1>
                    <h2 id="ib-subtitle">Exploring the possiblities of using paced resipration techniques to manage workplace stress </h2>

                    

                    <div className="written-content">
                        <p>
                            Incognito Breathing is a concept website which helps used paced resipration techniques to manage workplace stress. Inspired by psychology research, Incognito Breathing generates subtle breath-pacing visualisations based on your own digital workspace. As the visualisations are based on the user's own workspace, the website can easily be used in open plan offices without drawing unwanted attention from co-workers.
                        </p>

                        <p>
                            Incognito Breathing was inspired by the psychology findings of Harris, Katkin, Lick & Habberfield in 1976. They found that paced respiration is easy to learn and very effective in promoting relaxation and reduced stress responses. <br/>
                            Incognito Breathing is designed to help office workers manage mental health while at work, particularly in open plan offices where it can be more difficult to take a break. Incognito Breathing takes your workspace and applies a paced respiration timer to it, so users can do breathing exercises at right time/right place, without feeling insecure that someone will notice.
                        </p>

                        <p>
                            Manfred Garhammer wrote in 2002 that half of German office workers felt time pressured - up from a quarter in 1990. Open-plan offices in particular can cause fatigue and stress, even at normal volume levels as found by Witterseh, Wyon, & Clausen in 2002. <br/>
                            Paced respiration (deep, slow breathing from the diaphragm) helps manage stress and anxiety. Slowing, deep breathing lowers heart rates and prevents a state of hyperventilation from habitual over-breathing. Using paced respiration to manage anxiety is especially effective if it is practiced where the stress occurs, rather than removing yourself from a situation and then completing breath exercises. <br/>
                            Staff experiencing stress and anxiety in open plan offices often feel too anxious to take a break, because they may worry people will notice them not working. This can make it difficult to manage stress using this technique.
                        </p>
                    </div>

                    <div className="ib-hero-container">
                        <div className="ib-hero-imgs">
                            <img className="ib-hero-img" id="ib-homepage-hero" src={Homepage} alt="incognito breathing hompage shown on laptop" />
                            <img className="ib-hero-img" src={ibofficemockup_1} alt="Office scene with incognito breathing visualisation shown on computer" />
                        </div>
                    </div>

                    <div className="written-content">
                        <h2 className="ib-project-subheadings">Discovery & Ideation</h2>
                        <p>I researched paced respiration and how it is best used, and brainstormed different contexts in which people either feel stressed/anxious, and contexts where I thought paced respiration techniques would have the most benefit. <br/>
                            Through secondary research techniques I learned about the physiological response of stress and anxiety and how shallow breathing can cause a state of constant hyperventilation, which worsens the problem. Without managing the breath, it can be difficult to manage other symptoms of stress and anxiety. <br/> 
                            Cognitive Behavioural Therapy (CBT) commonly uses paced respiration techniques to correct this overbreathing.
                        </p>
                        <p>
                            From my research I considered places and situations where paced respiration could have the most use and realised there was a lot of opportunity to incorporate this practice into an office workday. <br/>
                            Workplaces are becoming more stressful, and open plan offices in particular contribute to steady increases of stress, fatigue, anxiety and burnout. Paced respiration is easily learned, quickly effective, and only takes a couple of minutes, meaning it could easily become a part of someone’s workday routine to great effect
                        </p>
                    </div>

                    <div id="hmw">
                        <h3>How might we create a product that helps people relax and manage workplace stress in an office environment, by adding paced breathing techniques into daily routines?</h3>
                    </div>

                    <div className="written-content">
                        <p>Three diverse concepts were pitched. To ensure the greatest positive impact on user wellbeing, all concepts focussed on subtlety and routine-building. </p>
                    </div>

                    <div className="concepts">
                        <div className="scrapped-concepts">
                            <img className="concept" src={IbConcept1} alt="" />
                            <img className="concept" src={IbConcept2} alt="" />
                        </div>
                        <img id="chosen-concept" src={IbConcept3} alt="" /> 
                         
                    </div>

                    <div className="written-content">
                        <p>After presenting all three designs to a group of people, the third design was chosen to further develop as it allowed for habit building and considered some unique environmental factors. The chosen concept was a breath timer disguised as a regular productivity website. A subtle animation within the page  would set the ideal breath pace. Treatment for anxiety is often more effective in the situation where the person feels anxious, rather than them going somewhere else, so this lets the staff member manage feelings of anxiety in place, without feeling self conscious.
                            
                        </p>
                    </div>

                    <div className="written-content">
                        <h2 className="ib-project-subheadings">Further Development</h2>
                        <p>Initial concepts had popular productivity software backgrounds for users to choose, but I decided a better solution was to let users upload screenshots of their workspace, with the breath timer appearing overtop of. This allows more people to use the site, regardless of their office software.</p>
                        <p>A lot of effort went into designing an appropriate breath-pacing visualisation. </p>
                        <ul><h5 id="list-subheading">The animation for the breath timer needed to be:</h5>
                            <li>Subtle enough that co-workers wouldn’t really notice it</li>
                            <li>Aid the sense of calm in visuals and audio</li>
                            <li>Easy to breathe along with</li>
                        </ul>
                        <p>Iterations were sketched, and mocked up and tested in After Effects/Premiere Pro.</p>
                        <p>I explored obscuring the screenshot in subtle ways, to take the user away from their work.</p>
                    </div>

                    <div id="visualisation-its">
                        <div className="ib-its-wrapper">
                            <img className="it-vid" src={IbIt1} alt="visualisation with bubble going up left side and across the top."></img>
                        </div>

                        <div className="ib-its-wrapper">
                            <img className="it-vid" src={IbIt2} alt="visualisation with jagged blur phasing in and out"></img>
                        </div>

                    </div>

                    
                    <div className="written-content">
                        <p>The most successful example had a clear bubble moving from left to right at the top of the window. This warped the image enough for users to see the bubble and follow along with it. Left to right seemed to work best for inhaling and exhaling rather than vertically, or non-directional.</p>
                    </div>
                    <div className="video-section-2">
                        <img className="vid" src={IbIt4} alt="final version of visualisation with bubble moving left to right at top of window, and opacity blur fading in and out on content."></img>
                    </div>

                    <div className="written-content">
                        <p>As a requirement for this project, testing needed to be conducted using psychology methodology. I wanted to measure stress, recovery and environmental concerns of working in a fast-paced, open plan office environment, and needed to consider how I would measure states of stress and restfulness, and factors to control for to ensure the test would be fair.</p>
                        <p>I wanted to find out the following things during testing:</p>
                    </div>

                    <div className="iB-reqs-container">
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How well does the visualisation help with relaxation?</h4>
                            <h5 className="test-patai-subheadings">Method options:</h5>
                            <p className="body-content">Self-reporting, biometric testing</p>
                            <h5 className="test-patai-subheadings">Controls & considerations:</h5>
                            <p className="body-content">Differences in headphones and how much noise they block out - participants asked to bring their usual headphones so the difference in sound when they put them on is what they’re already used to.</p>
                            <p className="body-content">How to create a sense of pressure similar to working at crunch time. </p>
                            <p className="body-content">
                                When to measure heart rate for consistency.<br/>
                                How successfully people can relax after completing a pressured task, with and without the device.
                            </p>
                        </div>
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How comfortable are people to use the site with others around?</h4>
                            <h5 className="test-patai-subheadings">Method options:</h5>
                            <p className="body-content">Self-reporting/interview</p>
                            <h5 className="test-patai-subheadings">Controls & considerations:</h5>
                            <p className="body-content">
                                Testing in an environment as similar to an open plan office. <br/>
                                Ensuring that some testing/feedback is from people that have/currently work in this environment.
                            </p>                     
                        </div>
                        <div className="IB-testing-reqs">
                            <h4 className="IB-testing-headings">How usable & enjoyable is the site?</h4>
                            <h5 className="test-patai-subheadings">Method options:</h5>
                            <p className="body-content">Interview, observation </p>
                            <h5 className="test-patai-subheadings">Controls & considerations:</h5>
                            <p className="body-content">
                                Test should be conducted the same way for all participants.
                                Navigation prompts should not be given by the tester.
                            </p>
                            <p className="body-content">
                                At this time usability is a secondary focus, as I need confirmation that the device can help participants with relaxation before focusing on finer points of user flows within the product. 
                            </p>
                        </div>
                    </div>

                    <div className="written-content" id="test-plan">
                        <div className="box">
                            <h2 className="ib-project-subheadings" id="session-plan-heading">Testing Session Plan</h2>
                            <div className="IB-test-design">
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon1} alt="calender icon with two days blocked out" />
                                    <h5 className="IB-testing-subheadings">Two Days of Testing</h5>
                                    <p className="test-plan-description">Day 1: Control test</p>
                                    <p className="test-plan-description">Day 2: Test with Incognito Breathing visualisation</p>
                                </div>
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon2} alt="Illustration of someone in user testing session" />
                                    <h5 className="IB-testing-subheadings">Four Participants</h5>
                                    <p className="test-plan-description">
                                        2 male and 2 female participants.<br/> 
                                        The same participants on both days.</p>
                                </div>
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon3} alt="Illustration of someone in user testing session" />
                                    <h5 className="IB-testing-subheadings">Setting</h5>
                                    <p className="test-plan-description">The test will be set in an environment similar to an open office.</p>
                                </div>
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon4} alt="Illustration of someone in user testing session" />
                                    <h5 className="IB-testing-subheadings">Time-Pressured Task</h5>
                                    <p className="test-plan-description">To simulate stress and elevate heart rate, participants complete as many maths equations as possible in 2 minutes.</p>
                                </div>
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon5} alt="Illustration of someone in user testing session" />
                                    <h5 className="IB-testing-subheadings">Heart Rate Monitoring</h5>
                                    <p className="test-plan-description">Heart rate is monitored throughout both sessions and is recorded at resting, the highest point, at the end of the pressured task, and the lowest point.</p>
                                </div>
                                <div className="Test-Details">
                                    <img className="testDetailIcons" src={TestIcon6} alt="Illustration of someone in user testing session" />
                                    <h5 className="IB-testing-subheadings">Timed Unwinding</h5>
                                    <p className="test-plan-description">After the time pressured task, participants are timed how long it takes to return to their resting heart rate - unaided on Day 1, and with Incognito Breathing on Day 2.</p>
                                </div>
                            </div>
                        <p id="test-plan-p">As well as testing the product, particpants were interviewed about the things they usually do to relax, how relaxed they felt using the design, if they could see themselves using it in the workplace.</p>
                        </div>
                    </div>

                    <div className="written-content">
                        <h2 className="ib-project-subheadings">Additional Testing</h2>
                        <p>
                            I also had an office worker test the visualisation in their workplace. This was an observational study to investigate subjective experience using the visualisation in an open-plan office. One male participant used the visualisation at two different times during their workday in their usual place of work, with their own headphones.
                        </p>
                        <p>
                            At the end of their workday they participated in a semi-formal interview and answered questions about their experience with the visualisation, how it affected their feelings and focus during the workday, and how aware they were of their colleagues while using the visualisation. 
                        </p>
                    </div>

                    <div className="written-content">
                        <h2 className="ib-project-subheadings">Results</h2>
                        <div className="written-content" id="results-section">
                            <img id="results-graphic" src={Results} alt="infographic with results" />
                        </div>
                        <p>Most users felt they would be comfortable using the site in an open plan office and found that it did help them relax.
                            One participant wanted to be able to breathe slower than the default, which would be easy to incorporate into future iterations of the design. There was also mixed feedback about the audio feature, with some people liking it and others finding it distracting. It would be good to have more customisation for this feature in future iterations.
                        </p>
                    </div>

                    <div className="feature-quote">
                        <h6>
                            "[I felt] content, calm and unworried. I wasn't distracted with what I was doing before."
                        </h6>
                        <h6>
                            "I would be happy to use the site. It's non-invasive. You can show your own desktop or what you're working on and people won't ask questions. You can chuck headphones on and be in your own space for a bit. "
                        </h6>
                        <h6>
                            "I wouldn't worry about using it around other people, It has a simple UI so you can kind of just do it on the screen and it guides you. You wouldn't need to explain to anyone."
                        </h6>
                    </div>

                    <div className="written-content">  
                        <p>
                            In addition to the user testing sessions, one further person was asked to test the site in their own workplace and interviewed about their experience. The following quote is from this participant.
                        </p>
                    </div>

                    <div className="feature-quote">
                        <h6>"I felt good [after using the site]. It was nice to stop in the middle of work and do it. It was quite calming not to think about what you were working on and watch the visualisation.
                            I could definitely incorporate it into my normal workday. I end up staring at code for a length of time to work something out anyway, so no one would be able to tell if I was staring at the bubble instead to calm down.
                            It helped me relax - it made me stop thinking about what I was doing at the time and zone out a little bit and helped me focus after."</h6>
                    </div>

                    <div className="written-content">
                        <p>
                            It was encouraging to see that the visualisation achieved its goals of helping people to relax in a high-pressure work situation, and it was even more encouraging that those that tested it felt they would feel comfortable using the device in their workplace.</p>
                    </div>


                    <div className="written-content">
                        <h2 className="ib-project-subheadings">Future Development Opportunities</h2>
                        <ul>
                            <h4 className="iBh4">Small improvements:</h4>
                            <li>
                                Improve audio features by ensuring timing is beautifully in sync, and that there are different options for audio that include nature sounds, as well as clearer breath guidance for those that don’t want to use/can’t use the visual features.
                            </li>
                            <li>
                                Small, additional accessibility options such as visual only, audio only and different animations that are easier for low vision users to see.
                            </li>
                            <h4 className="iBh4">Larger features to improve:</h4>
                            <li>
                                Improve and test website interface and create and test a proper onboarding experience.
                            </li>
                            <li>
                                Develop prototype so it can take the picture, add it as background image, and then lay animation over the top in an appropriate place by detecting contrast.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <SeeMore project1={"hints"} project2={"acDf"} />
        </div>
    );
} 
