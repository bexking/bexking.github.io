import React from 'react';  
import '../CSS/contact-footer.css';
import Contact from '../../Assets/contact.png';
import Insta from '../../Assets/insta.png';
import WavesFooter from "../../Assets/waves.svg";

export default function ContactFooter() {
    return (
        <div>
            <hr className="footer-hr"></hr>
            <div className="contactFooter">
                <h2 className="contact">Contact</h2>
                <div className="contact-blurb">
                    <div id='contact-textblock'>
                        <p id="footer-text" className='p-feature'>Any pātai or want to work together? Whakapā mai! </p>                 
                    </div>
                    
                    <div className="contact-links">
                        <a href="linkedin.com" className='contactLink'>
                            linkedIn
                        </a>  
                        <a href="instagram.com" className='contactLink'>
                            Instagram
                        </a>  
                        <a href="instagram.com" className='contactLink'>
                            Github
                        </a>  
                        {/* <a href="https://www.instagram.com/bex_sketchh" target="_blank"><img className="contact-icon" src={Insta}></img></a> */}
                    </div>
                </div>
                <a href="mailto:bexkingdesign@gmail.com">
                    <button className='button-reg'>Email me</button>
                </a>   
            </div>
            {/* <img className="wavefooter" src={WavesFooter} alt="dark brown wave pattern" /> */}
            <div className="wavefooter">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}