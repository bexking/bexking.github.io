import React from 'react'
import '../CSS/projectPage.css';
import '../CSS/hints.css';
import DrawingBox from '../../Assets/engoo-images/drawing-box-review.png';
import DrawingBoxSS from '../../Assets/engoo-images/drawing-box-ss.png';
import DrawingBoxSml from '../../Assets/engoo-images/drawing-box.png';
import EngooDv1 from '../../Assets/engoo-images/engoo-dvpt1.jpg';
import EngooDv2 from '../../Assets/engoo-images/engoo-dvpt2.jpg';
import Test1 from '../../Assets/engoo-images/testing-1.jpg';
import Test2 from '../../Assets/engoo-images/testing-2.jpg';
import Test3 from '../../Assets/engoo-images/testing-3.jpg';
import Test4 from '../../Assets/engoo-images/testing-4.jpg';
import Test5 from '../../Assets/engoo-images/testing-5.jpg';
import Test6 from '../../Assets/engoo-images/testing-6.jpg';
import EngooHero from '../../Assets/engoo-images/engoo-hero.png';
import HintBox from '../../Assets/engoo-images/engoo-hintbox.png';
import Per1 from '../../Assets/engoo-images/engoo-p1.png';
import Per2 from '../../Assets/engoo-images/engoo-p2.png';
import Per3 from '../../Assets/engoo-images/engoo-p3.png';
import Per4 from '../../Assets/engoo-images/engoo-p4.png';
import Per5 from '../../Assets/engoo-images/engoo-p5.png';
import Per6 from '../../Assets/engoo-images/engoo-p6.png';
import Sk1 from '../../Assets/engoo-images/engoo-sk1.jpg';
import Sk2 from '../../Assets/engoo-images/engoo-sk2.jpg';
import Uf1 from '../../Assets/engoo-images/hints-uf1.png';
import Uf2 from '../../Assets/engoo-images/hints-uf2.png';
import Results from '../../Assets/engoo-images/results.png';
import Translations from '../../Assets/engoo-images/Translations.png';
import Nav from '../../Components/JS/nav2.js';



export default function Hints() {
    return (<div>
        <Nav />
        <div className="hint-page">
            <h1>Language Learning Hints - with Engoo</h1>
            <img id="homepage-hero" src={EngooHero} alt="engoo image hints box" />
            
            <div className="written-content">
                <p>
                    This is a proposed hint system for English-language lesson platform Engoo, which provides one-on-one online English lessons. Engoo is a Japanese company with its main markets being Japan and South Korea, but has users in many different countries.
                </p>
                <p>
                    The Daily News lesson material is the most popular feature of the site, which provides a simple-English news article for users to read and have a converstiion about. The only hints/prompts offered within the section are local language translations for their main markets.
                    Because Engoo is used in many countries, it was hard for them to fit the translations in a way that accommodated all languages, so the local language translations was displayed in full below the English version in one block. This disconnection from the text creates an inconvenient user experience.
                </p>
                <p>I used the <a href="https://uxdesign.cc/how-to-solve-problems-applying-a-uxdesign-designthinking-hcd-or-any-design-process-from-scratch-v2-aa16e2dd550b">Double Diamond</a> to inform my design process, taking the information provided by the company about their users, analysing it, doing supplementary research and trying to get a full understanding of the users and the design problem before moving on to ideation.</p>
                <p>
                    The following user flow diagrams show the two main journeys users follow when using Daily News.
                </p>
            </div>

            <div className="user-flows">
                <img className="uf" src={Uf2} alt="user flows using translation feature - user scrolls up and down repetitively trying to read the english and the translation sentence by sentence" />
                <img className="uf" src={Uf1} alt="user flows using translation feature - user reads all text in english and the translation at the end to check answers." />
            </div>

            <div className="written-content">
                <p>
                    Sentence by sentence is the ideal translation method for students to learn the material as it provides immediate feedback. To read this way, users must frequently scroll up and down between English and their native language. Many users give up on this method because of the need to scroll.
                    When reading the text in their native language, users accidentally read too far ahead at once because of the translation appearing as one block of text. This ruins the challenge for the rest of the exercise.
                    Due to the limitations of the translation experience, many users end up changing their behaviour - first trying to read as much as they can in English, and then reading their native-language translation in one go at the end of the exercise.
                </p>
            </div>

            <div className="written-content">
                <h2>Who does this problem impact?</h2>
                <p>
                    Engoo’s main customer groups are represented below as personas.
                </p>
                <ul>
                    <li>A large number of students are from Japan and South Korea.</li>
                    <li>Many Engoo users engage with the site on mobile devices.</li>
                    <li>Daily news is provided for the intermediate-advanced level users, but only intermediate level articles have a translation option, so the users most affected are personas 1, 2, and 5.</li>
                </ul>
                <div className="personas">
                    <img className="persona" src={Per1} alt="persona 1" />
                    <img className="persona" src={Per2} alt="persona 2" />
                    <img className="persona" src={Per3} alt="persona 3" />
                    <img className="persona" src={Per4} alt="persona 4" />
                    <img className="persona" src={Per5} alt="persona 5" />
                    <img className="persona" src={Per6} alt="persona 6" />
                </div>
            </div>

            <div className="written-content" id="goals">
                <h2 id="goals-title">Project Goals</h2>
                <p id="goals-para">The solution must:</p>
                <ul id="goals-list"> 
                    <li>Provide a translation experience that creates better opportunities for language acquisition across the board.</li>
                    <li>Have a natural user flow</li>
                    <li>Support languages with differing lengths.</li>
                    <li>Allow users to access more immediate translation feedback.</li>
                    <li>Retain a “news-feel” - the page should feel like a news article.</li>
                    <li>Work on a range of devices</li>
                    <li>Be easy to use for less technically proficient users.</li>
                </ul>
            </div>

            <div className="written-content">
                <h2>Research, Ideation & Prototyping</h2>
                <p>
                    I began with sketches before digital prototypes. Early on I had the idea to use the space between paragraphs to break up the translated text.
                    This concept was inspired by spoiler tags and sought to meet Engoo’s need to have a better flow when interacting with the translation, without disrupting the “news-feel” of the page.
                </p>

                <div className="two-col-grid">
                    <img className="engoo-sketch" src={Sk1} alt="persona 4" />
                    <img className="engoo-sketch" src={Sk2} alt="" />
                </div>

                <p>
                    Research findings led to the second main concept that allowed users to input their own hints to create stronger memories.
                    Memory acquisition requires active engagement. Shallow acquisition will create shallow memories. -Gleitman et. al
                </p>

                <div>
                    <img className="engoo-dvpt" src={EngooDv1} alt=""/>
                    {/* <img className="engoo-dvpt" src={EngooDv2} alt=""/> */}
                </div>
                
            </div>

            <div className="written-content">
                <h2>User Testing</h2>

                <div className="testing-images">
                    <div className="testingImageContainer">
                        <img id="testingImage1" className="testing-pic" src={Test1} alt="" />
                    </div>
                    <div className="testingImageContainer">
                        <img id="testingImage2" className="testing-pic" src={Test2} alt="" />
                        <img id="testingImage3" className="testing-pic" src={Test3} alt="" />
                    </div>
                </div>
                <div className="testing-images">
                    <img id="testingImage6" className="testing-pic" src={Test6} alt="" />
                    <img id="testingImage5" className="testing-pic" src={Test5} alt="" />
                    <img id="testingImage4" className="testing-pic" src={Test4} alt="" />
                </div>
                <p>
                    Comparison tests were done between the two designs as I was concerned that design two with multiple options would be too complicated.
                    Paper prototypes were used so the user could fill in their own hints.
                </p>
                <p>The user was asked to try to learn some vocabulary and then identify the words and their meaning within the article.</p>
            </div>

            {/* <div className="written-content">
                <h2>Results</h2>
                <div className="results-container">
                    <ul className="results">
                        <p>Design One:</p>
                        <li>The user didn't have to do a significant amount of scrolling, but did have to go back up the page to the vocab section once. </li>
                        <li>It was difficult for the user to know to interact with the paragraph space, but this may have been due to the limitations on the paper prototype.</li>
                        <li>It didn't take long for the user to learn how the translation space worked.</li>
                        <li>In some cases, the translation alone didn't help the user, as they didn't know the new word strongly enough to identify it in the translated paragraph.</li>
                        <li>The user liked the idea of learning from the news story, and it was clear to them that it was a news story, even with the slightly expanded paragraphs. </li>
                    </ul>

                    <ul className="results">
                        <p>Design Two:</p>
                        <li>Due to using the previous design, the user instinctively looked to the paragraph space when they needed a prompt.</li>
                        <li>The user was able to successfully identify the majority of hint icons, and became a bit excited and energetic when they saw the options. They identified all the icons except Text - they assumed it would be a translation like they had previously seen, and when they saw a separate translate icon, they wondered what Text would be.</li>
                        <li>The user clicked the icons and was excited when saw they could upload their own hints. They started listing the types of hints they would add, such as uploading sound files and writing hints such as "rhymes with x"</li>
                        <li>The user wanted to draw their own hints for the image section, and said they would probably open up paint, but would prefer if they could draw directly in the site during the lesson.</li>
                    </ul>
                </div>

                <p>From testing I discovered the design was not too
                    complex and in fact the participant wanted extra
                    features, such as adding hints at the vocabulary section,
                    and a drawing feature. The user quickly learned how the system worked and enjoyed coming up with their own hints, and felt that this helped them better identify new words they had learned later in the text. They liked the variety of hint options available.</p>
                <p>The user liked the idea of highlighting the word in the article and being able to view all avaliable hints for that word.</p>
                <p>The user also wanted to be able to add hints directly from the vocabulary section before the article.</p>
                <p>
                    Testing also uncovered some further opportunities for the hint system, such as adding hints at the vocabulary section, and the desire to be able to draw own hints rather than just uploading an image. The user mentioned they often like to learn things by drawing a picture or a diagram. From my own experience in learning languages I could see the appeal, as you could create your own diagrams to show relationships between words to better learn the structure of the language, as well as drawing simple images of the words as a hint. 
                </p> 
            </div> */}

            <div className="written-content">
                <h2>Results</h2>
                <div className="results-category">
                    <div className="results-text">
                        <h2>Usability</h2>
                        <h3>Design One - Translation Only</h3>
                        <p>
                            Even with the translation now available below each paragraph, the user still scrolled up and down often while they were trying to learn the words from the vocabulary section.
                        </p>
                        <h3>Design Two - Translation & Hints</h3>
                        <p>
                            Once the user was aware of the paragraph space options, it became natural for them interact with it. 
                            hey had no problems using the feature and were able to easily submit and retrieve their own hints.
                        </p>
                        <p>
                            With all the new hint options, the user wished to be able to add hints right away in the vocabulary exercise at the top. 
                        </p>
                    </div>
                    <div className="feature-quote" id="fq-1">
                        <p className="hints-user-quotes" id="fq-1-text">"I preferred version two with the extra hints. In ersion one, I had to look around for the right part a lot [if I forgot]"</p>
                    </div>
                </div>

                <div className="results-category">
                    <div className="feature-quote" id="fq-2">
                            <p className="hints-user-quotes" id="fq-2-text">"Oooohh! I could add my own hints? Like sound files and things?!"</p>
                    </div>
                    
                    <div className="results-text">
                        <h2>Clarity</h2>
                        <p>There was no visual cue within the paper prototype to show you could interact with the paragraph space, so the user needed to be prompted to find this feature.</p>
                        <h3>Design One - Translation Only</h3> 
                        <p>
                            It was easy for the user to understand what the translation button would do.
                        </p>
                        <h3>Design Two - Translation & Hints</h3>     
                        <p>
                            Most of the icons were clear here, though the user thought the text button would bring up the translation. When they saw the translation button, they wondered what the Text button would do and weren’t sure what to expect.
                        </p>              
                        <p>
                            Once they interacted with the buttons for the different hint options, it was clear to them what their options were and how they would submit and find hints by highlighting words and interacting with the paragraphs.
                        </p>
                    </div>
                </div> 

                <div className="results-category">
                    <div className="results-text">
                        <h2>Memory</h2>
                        <h3>Design One - Translation Only</h3> 
                        <p>
                            The user had a difficult time remembering the words through searching in the translations alone. 
                        </p>
                        <h3>Design Two - Translation & Hints</h3> 
                        <p>
                            The user was excited when they realised they could add their own hints and felt that this would help them remember. 
                            They made up rules for remembering the words that made sense to them.
                            They liked that there were different options for hints such as sound, text and image so that they could remember in a variety of ways.
                            They especially liked that you could add multiple different hints for one word to really help with memory.
                        </p>
                    </div>
                    <div className="feature-quote" id="fq-3">
                        <p className="hints-user-quotes" id="fq-3-text">
                            “I liked having the different options. I think it would help you remember.”
                        </p>
                    </div>
                </div>
                <div className="results-category">
                    <div className="feature-quote" id="fq-4">
                        <p className="hints-user-quotes" id="fq-4-text">
                            “I’d probably open up paint and draw a picture and then upload it, but that it would be cool if I could draw directly in the website.””
                        </p>
                    </div>

                    <div className="results-text">
                        <h2>Other Points Of Interest</h2>
                        <p>The user did not find the different options overwhelming in Design Two & felt everything available was useful.</p>
                        <p>The user also commented that they would like to draw their own hints for the image section if possible.</p>
                    </div>
                </div>

            </div>

            <div className="written-content">
                <h2>Refining the Design</h2>
                <p>
                    I created an overlaid hints window for adding and
                    showing most hint types as space was lacking for
                    viewing images.
                    The extra space also allowed for features like drawing to be incorporated.
                </p>
                <p>A digital prototype of the new concpet was built in Adobe XD.</p>
                <img className="drawing-ft-review" src={DrawingBox} alt="" />
            </div>

            <div className="written-content">
                <h2>The Final Concept</h2>
                <p>
                    Engoo hints is a new hint system for the Daily News
                    learning materials.
                    The system allows users to add their own, personalised
                    prompts and hints for specific words they are trying to learn.
                    The system lets users add links, text, images or audio as
                    hints, giving them a wide range of options to help remember
                    in their own way.
                    Translations are available between paragraphs to make
                    them an easy companion to reading.
                </p>

                <img className="drawing-ft-review" id="results-poster" src={Results} alt="" />
            </div>
        </div>
    </div>
    )
}
