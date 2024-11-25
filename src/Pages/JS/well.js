import React from 'react'
import '../CSS/well.css';
import '../CSS/projectPage.css';
import WellHero from '../../Assets/well-images/well3-overview-nologo.jpg';
import DesignThinking from '../../Assets/well-images/design-thinking-model.png';
import WellIt3 from '../../Assets/well-images/well-ideation1.jpg';
import WellIt1 from '../../Assets/well-images/well-ideation2.jpg';
import WellIt2 from '../../Assets/well-images/well-ideation3.jpg';
import WellIt4 from '../../Assets/well-images/well-ideation4.jpg';
import WellProto1 from '../../Assets/well-images/well-proto1.jpg';
import WellProto2 from '../../Assets/well-images/well-proto2.jpg';
import WellProto3 from '../../Assets/well-images/well-proto3.jpg';
import WellProto4 from '../../Assets/well-images/well-proto4.jpg';
import WellProto5 from '../../Assets/well-images/well-proto5.jpg';
import WellFinal1 from '../../Assets/well-images/final-1.png';
import WellFinal2 from '../../Assets/well-images/final-2.png';
import WellFinal3 from '../../Assets/well-images/final-3.png';
import WellFinal4 from '../../Assets/well-images/final-4.png';
import WellFinal5 from '../../Assets/well-images/final-5.png';
import WellFinal6 from '../../Assets/well-images/final-6.png';
import WellInfog from '../../Assets/well-images/interview-info.png';
import WellInfog1 from '../../Assets/well-images/interview-info1.png';
import WellInfog2 from '../../Assets/well-images/interview-info2.png';

export default function Well() {
    return (

        <div>
            <div className="well-page">
                <img id="homepage-hero" src={WellHero} alt="Well Well Well App Homescreen displayed on iPhone surrounded by examples of the app's other main sections." />
                <h1 className="project-heading" id="well-heading">Well Well Well</h1>
                <h2 id="well-subtitle">A Victoria University of Wellington-based app to help raise awareness of the United Nations Sustainable Development Goals, help students to learn to look after their health and wellbeing, and provide anonymous reporting to the university about how students are feeling.</h2>
            </div>

            <div className="well-bg">
                <div className="well-written-content">
                    <h2 className="well-h2">Background</h2>
                    <p className="well-p">As part of DSDN 183 - Design Thinking For Sustainability I needed to design something to increase VUW students’ awareness of the UN Sustainable Development Goals, and especially SDG3 - Good health and wellbeing. I drew upon Stanford's Design Thinking model for my approach.</p>
                    <div id="design-thinking">
                        <img src={DesignThinking} alt="Stanford Design Thinking Model - Empathise-Define-Ideate-Prototype-Test" />
                    </div>
                </div>
            </div>

            <div className="well-empathise">
                <div className="well-written-content">
                    <h2 className="well-h2">Empathise</h2>
                    <p className="well-p">I conducted interviews with students to empathise and understand their experiences with health, wellbeing, and the SDGs.</p>
                    <div className="well-infog-cont">
                        <img id="well-infographic" src={WellInfog} alt="infographic summarising results of interviews" />
                    </div>


                    <p className="well-p">
                        I found many students felt uni was a stressful place and
                        most understood wellbeing to relate to mental health in particular, or obesity.
                        Most students believed that when their mental health was poorer, it was hard to think about broader
                        health issues. This was consistent with results from the recent Mental Health Inquiry, which
                        identified that many students around New Zealand feel academic pressure which leads to depression,
                        anxiety and stress. I also  <a className="well-link" href="https://www.edudemic.com/stress-affects-brain-learning/" target="_blank">researched</a> the relationship between learning and stress and learned that under
                        prolonged stress people release highler levels cortisol, making learning
                        difficult.
                    </p>
                </div>
            </div>

            <div className="well-define">
                <div className="well-written-content">
                    <h2 className="well-h2">Defining the problem</h2>
                    <div id="rm-hmw">
                        <h3 className="well-h3">
                            How might we create a useful tool for VUW students to learn about SDG3 Good Health & Wellbeing in a lasting way, and sustain Good Health & Wellbeing in their own lives?</h3>
                    </div>
                </div>
            </div>

            <div className="well-ideate">
                <div className="well-written-content">
                    <h2 className="well-h2" id="ideate-title">Ideation</h2>
                    <div className="ideation-content">
                        <p className="well-p" id="ideation-p">
                            I had an ideation session where I jotted down everything that came to mind after reviewing the interview content. I considered apps, games, and printed solutions. From the interviews I recognised that the university itself influences the health of students, with good teachers and tutors and access to student health services contributing to good health and wellbeing, and stressful workloads and long wait-times to access help amplified feelings of unhealth.
                            It was this relationship between the health of students and the university institution that stuck with me - I wanted to achieve the task of increasing awareness of the SDG with students, but I also wanted to try and give insights to the university institution in a way that did not significantly increase workload for students.
                        </p>
                        <div className="ideation-container">
                            <img className="ideas" src={WellIt1} alt="Handwritten note recording the priority of sharing the sdgs with students and helping manage health." />
                            <img className="ideas" src={WellIt2} alt="Handwritten note with a bunch of feature ideas for a design based around health, including breathing exercises, recipes, available support" />
                            <img className="ideas" src={WellIt3} alt="Handwritten note with an app idea, and a note asking how we can create stronger partnerships between students and uni to support health" />
                            <img className="ideas" src={WellIt4} alt="Handwritten note recording ideas for potential games or printed good health and wellbeing designs" />
                        </div>

                        <div className="hardware">
                            <ul className="hardware-list">
                                <h4 className="ulh4">Concept</h4>
                                <p>I chose to work on a mobile app for VUW students that would serve three purposes:</p>
                                <li className="rm-li">Increase awareness of the SDG Good Health & Wellbeing amongst students</li>
                                <li className="rm-li">Provide students with extra tools and information to look after their own health and wellbeing</li>
                                <li className="rm-li">Send the university anonymous insights of how students are feeling, and if they feel they have adequate access to support services. This data could be used by the university to help form budgets, allocate funding and support new initiatives as needed.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="well-define">
                <div className="well-written-content">
                    <h2 className="well-h2">Prototype</h2>
                    <div className="draft-proto-container">
                        <img className="ideas" src={WellProto1} alt="very rough hand-drawn homescreen plan beginning prototyping process" />
                        <img className="ideas" src={WellProto2} alt="very rough hand-drawn plan for app's initial functional layout" />
                        <img className="ideas" src={WellProto3} alt="more fleshed-out hand-drawn draft for a home screen and app features" />
                    </div>
                    <div className="paper-proto">
                        {/* <img id="proto4" src={WellProto4} alt="large paper prototype showing all proposed app screens" /> */}
                        <p className="para-proto">I worked my ideas into a paper protoype template so that my classmates could get an idea of the app's features and provide any feedback before refining the design into a more polished digital prototype. This planned design contained SDG-related information about global, national and local health, as well as containing a "Your Health" section - tackling issues relevant to students related to physical, and mental wellbeing. The Your Health section contained a Health Log where users could submit simple feedback to the university about how they are feeling, and if they have enough support.</p>
                    </div>

                </div>
            </div>

            <div className="well-empathise">
                <div className="well-written-content">
                    <h2 className="well-h2">Test</h2>
                    <p className="well-p">
                        The design was tested with classmates to gather feedback.
                        People liked that the app was holistic, including practical resources such as easy recipes to cook, breathing exercises, and other tools to manage stress and anxiety at an individual level, as well as learning materials about the SDGs and global health.
                    </p>
                </div>
            </div>

            <div className="well-refine">
                <div className="well-written-content">
                    <h2 className="well-h2">Refine</h2>
                    <div className="digi-proto">
                        <div className="para-digi-cont">
                            <p className="para-digi">
                                I refined my design based on feedback and created a higher quality digital prototype. I used Adobe Xd to create different pages within the app. I also spent time creating basic icons to use throughout.
                            </p>
                            <p className="para-digi">
                                Because the VUW students I spoke to had the biggest concerns about mental health, I chose a calming, pastel colour palette.
                            </p>
                            <p className="para-digi">
                                I further developed the How Are You Feeling section with a blurb sharing that the information would be sent anonymously to the university and its purpose. I added sliders for physical and mental wellbeing, and also added Find Help buttons so students who need help could view what services are available to them.
                            </p>
                        </div>
                        {/* <img id="proto5" src={WellProto5} alt="Refining the app's pages into a higher quality digital prototype in Adobe Xd" /> */}
                    </div>
                    <div className="well-final-imgs">
                        <img className="well-final-img" src={WellFinal1} alt="Homepage for Well Well Well digital prototype" />
                        <img className="well-final-img" src={WellFinal2} alt="Your Health page for Well Well Well digital prototype" />
                        <img className="well-final-img" src={WellFinal3} alt="How are you feeling page for Well Well Well digital prototype" />
                        <img className="well-final-img" src={WellFinal4} alt="Health resources page for Well Well Well digital prototype with physical and mental health links, as well as exercise and cooking sections" />
                        <img className="well-final-img" src={WellFinal5} alt="Intro to UN SDGs page for Well Well Well digital prototype" />
                        <img className="well-final-img" src={WellFinal6} alt="SDGs Good Health & Wellbeing information page for Well Well Well digital prototype" />
                    </div>
                </div>
            </div>
        </div>

    )
}