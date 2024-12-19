import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import Lesson from '../../Assets/engoo-images/engoo-lesson.jpg';
import Translations from '../../Assets/engoo-images/Translate.jpg';
import Menu from '../../Assets/engoo-images/hint-menu.jpg';

export default function Hints() {
    return (
    <div> 
        <div className="project-page">           
            <div className='project-heading-container'>
                <div className="text-block-third">
                    <span>University project</span>
                    <h1 className='long-project-title'>Innovating vocab hints for online English lessons with Engoo</h1>
                    <p className='type-of-work'>UX/UI, UX Research, Prototyping</p>
                </div>
                <div className="hero-two-thirds">
                    <img id="test-image1" src={Lesson} alt="Man sits at laptop at a table with a coffee. On the laptop screen is the site Engoo. The man is drawing a picture of some people and a house as a visual hint for the word visitors." />
                </div>
            </div> 
            <div className='body-copy'>
                <p>
                    Engoo provides one-on-one online English lessons. Based in Japan, the company has users worldwide, and main markets in Japan and South Korea.
                    The Daily News section is the site's most popular resource, providing simple-English news articles for learners to read and discuss. 
                    Despite its popularity, Daily News lacked reminder features for learners, only providing direct local translations for major markets after the full body of English text. This made learning and retention less effective, and created a frustrating UX.
                    Sentence by sentence translation is better for students' learning. Additionally, memory acquisition requires active engagement - shallow acquisition creates more shallow memories [Psychology (Fifth Edition) by Gleitman, Fridlund & Reisberg].
                </p>
                <p>
                I wanted to explore concepts that would provide better feedback options, and explore ways users could input their own hints for greater impact. Engoo wanted to ensure the page retained a news feel, and that any solutions would be able to accommodate a wide-range of languages. I also sought to have a natural user flow, allow users to access more immediate translation feedback, work on a range of devices, and be easy to use for less technically proficient users. 
                </p>
                <p> I developed and tested two main prototypes, one with simple hints that could appear between paragraphs, and another more complex option which also included a variety of ways to add personalised hints including text, audio, and images which could be uploaded, or drawn by the user.
                    In testing, the ability to create personalised hints was preferred, and this version was developed futher into a digital prototype. 
                </p>
            </div>
            <div className='half-width-content-block'>
                <img id="half-width-test" src={Translations} alt="Laptop showing Engoo website with local language translation between two paragraphs in a scrollable box below english text" />
                <img id="half-width-test" src={Menu} alt="Four small weatherboard huts sit in an icy coastal scene" />
            </div>
        </div>
        <ContactFooter />
    </div>
    )
}