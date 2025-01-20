import React from 'react'
import '../CSS/projectPage.css';
import ContactFooter from '../../Components/JS/contact-footer.js';
import BankingHero from '../../Assets/banking-hero.jpg';
import Intro from '../../Assets/banking/intro.jpg';
import Method from '../../Assets/banking/method.jpg';
import BankingPages from '../../Assets/banking/pages.jpg';
import NextProject from '../../Components/JS/next-project.js';
import { Link } from "react-router-dom";

export default function banking() {
    return (
        <div>
            <div className="project-page">           
                <div className='project-heading-container'>
                    <div className="text-block-third">
                        <span>Westpac NZ</span>
                        <h1 className='long-project-title'>Improving banking experiences for disabled people</h1>
                        <p className='type-of-work'>Qualitative Research, Graphic Design, Writing, Accessibility</p>
                        <a href="https://www.westpac.co.nz/assets/About-us/Accessible-banking/documents/Westpac-Disability-and-Inclusion-in-Banking-Report.pdf">Link to the full report</a>
                    </div>
                    <div className="hero-two-thirds">
                        <img id="test-image1" className='hero-image' src={BankingHero} alt="Report mockup showing two copies of the report. The first is closed and shows the cover. The second is open to a spread at the beginning of the insights section." />
                    </div>
                </div> 

                <div className='body-copy'>
                    <p>
                        In 2024, Westpac wanted to find out about barriers disabled people experience with banking and payment services, and hear recommendations on ways to better serve disabled customers. My colleagues and I took a qualitative research approach and spoke to 25 people with lived experience, people who cared for disabled loved ones, and people from organisations representing disabled people to learn more. Interviews were held online or in person, with partcipants choosing a format that worked best for them. We found that there while there were some big challenges for our participants, and some big challenges for banks, there was also many simple things that banks could be doing to improve access, choice, and independence for disabled people.
                    </p>
                    <p>
                        I was heavily involved in graphic design and research in this project. In my research role I supported participant recruitment, project management, and research design, conducted interviews, lead data capture and processing, and contributed to thematic analysis, report writing, and editing.
                    </p>
                    <p>
                       In my graphic design role, I created assets for research and lead graphic design of the final report. The graphic design needed to visually relate to Westpac's previous report Access to Banking in Aotearoa. I used this as precedent, and made adjustments to the colour palette and typography for accessibility - darkening colours to improve contrast, and increasing the sizing, spacing, and weight of the typefaces used.
                        We wanted the report to meet technical accessibility standards, but we also wanted to honour participants' stories by ensuring the information and concepts were accessible to the reader. We included vignettes to share important experiences, and other smaller illustrations to build empathy and understanding. I worked with project leads to develop concepts for these visualisations and illustrator Rachel McPhee brought them to life.
                        We also wanted to ensure information was accessible to those able to make changes to improve banking experiences for disabled people, so recommendations were numbered and categorised for banks, regulators, or others within the sector to easily see what sits with them.
                    </p>
                    <p>Since this project began, Westpac have begun actioning recommendations from this research, signing on to the Hidden Disabilities Sunflower programme, for example. On the 21st of January 2025, Westpac published the report on their website. 
                        In a press release, Chief Executive Catherine McGrath said: <br/>
                        “We have been working for some time on making our services more accessible, but this research brings home the wide range of hurdles that still exist and the need for more urgency, with interviewees saying the banking system needs to do a better job... We’ve taken those insights on board and will be sharing them with other banks and partners in government.”
                        —
                        <a href="https://www.scoop.co.nz/stories/BU2501/S00149/westpac-nz-working-to-improve-banking-for-the-disabled-community.htm"> Westpac NZ Working To Improve Banking For The Disabled Community, Press Release: Westpac New Zealand.</a>
                    </p>
                </div>   

                <div className='half-width-content-block'>
                    <img id="half-width-test" src={Intro} alt="Mockup showing introduction spread" />
                    <img id="half-width-test" src={Method} alt="Mockup showing method spread. Shapes from the cover design have been used to create simple graphics related to the research process" />
                </div>

                <div className='full-width-content-block'>
                    <img className="full-width-test" src={BankingPages} alt="A selection of pages from the report in a grid. This shows a range of pages such as vignettes, recommendations, and insights pages." />
                </div>  

                <div className='full-width-content-block'>
                    <div>
                        <div className='next-project-bar'>
                            <div className='back'>
                                <Link to="/booking" className="med-link">&#8592;&emsp;&nbsp;Back</Link>
                            </div>
            
                            <div className='next'>
                                <Link to="/screen-investment-review" className="med-link">Next&emsp;&#8594;&nbsp;</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <ContactFooter />
        </div>
    )

}