import React from 'react';  
import '../CSS/contact-footer.css';
import Contact from '../../Assets/contact.png';
import Insta from '../../Assets/insta.png';

export default function ContactFooter() {
    return (
        <div>

            <div className="contactFooter">
                <div className="contact-blurb">
                    <h3 className="contact">Whakapā mai!</h3>
                    <p id="footer-text">Contact me with opportunities, or to say hey 🙋🏻‍♀️ </p>
                    <div className="contact-links">
                        <a href="mailto:bexkingdesign@gmail.com">
                            <img className="contact-icon" src={Contact} alt="envelope icon" />
                        </a>  
                        <a href="https://www.instagram.com/thingsbexmade" target="_blank"><img className="contact-icon" src={Insta}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}