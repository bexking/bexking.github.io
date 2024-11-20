import React from 'react';  
import '../CSS/contact-footer.css';
import Contact from '../../Assets/contact.png';
import Insta from '../../Assets/insta.png';
import WavesFooter from "../../Assets/waves.svg";

export default function ContactFooter() {
    return (
        <div>
            <div className="contactFooter">
                <hr className="footer-hr"></hr>
                <h2 className="contact">Contact</h2>
                <div className="contact-blurb">
                    <div id='contact-textblock'>
                        <p id="footer-text">Any pātai or want to work together? Whakapā mai! </p>
                        <a href="mailto:bexkingdesign@gmail.com">
                            <button className='button-reg'>
                            Email me</button>
                        </a>                    
                    </div>
                    <div className="contact-links">
                        <a href="linkedin.com" className='contactLink'>
                            linkedIn
                        </a>  
                        <a href="instagram.com" className='contactLink'>
                            Instagram
                        </a>  
                        {/* <a href="https://www.instagram.com/bex_sketchh" target="_blank"><img className="contact-icon" src={Insta}></img></a> */}
                    </div>
                </div>
            </div>
            <img className="wavefooter" src={WavesFooter} alt="dark brown wave pattern" />
        </div>
    )
}