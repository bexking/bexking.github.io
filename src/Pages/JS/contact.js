import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/contact.css';

export default function Contact() {
    return (
        <div>
           <div className="work-feature">
                <div id='feature-section'>
                    <div className='bio-container'>
                        <h1 id="bio-h1">Whakapā mai</h1>
                        <p className='intro-large'>
                            Kia ora, drop me an email down below! </p>
                    </div>
                </div>
                <form action="https://usebasin.com/f/d65363db7fb5" method="post"> {/* Keep this line the same, change other form elements as necessary */}
                    <div className='contact-form'>
                        <div className='fields'>
                            <label>Your email address
                                <input name="email" type="text" placeholder="Your email..."/>
                            </label>
                            <label>Subject
                                <input name="subject" type="text" placeholder="Subject..."/>
                            </label>
                            <label>Message
                                <textarea name="message" type="text" class="form-section" cols="45" rows="8" placeholder='Your message...'></textarea>
                            </label>
                                {/* <input type="submit"/> */}
                                <button type="submit" className='button-reg'>Send</button>

                        </div>
                        
                    </div>
                </form>
            </div>
    </div>
    )
}
