import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/contact.css';

export default function Contact() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await fetch("https://usebasin.com/f/d65363db7fb5", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            }).then((value) => {
                history.push("/contactsuccess"); // Redirect after form is finished submitting. You can change this
            })
      };
      
    return (
        <div>
           <div className="work-feature">
                <div id='feature-section'>
                    <div className='bio-container'>
                        <h1>Kia ora!</h1>
                        <p className='p-medium' id="contact-cta">
                            Thanks for visiting my portfolio. 
                        </p>
                        <p className='p-medium' id="contact-cta">
                            If you'd like to learn more or work together, send me a message through this form. I'd love to have a chat! 
                        </p>
                    </div>
                
                    <form onSubmit={handleSubmit}>
                        <div className='contact-form'>
                            <div className='fields'>
                            <h2 className='contact-heading'>Contact form</h2>
                                <label>Your email address:
                                    <input name="email" type="text" placeholder="Your email..." value={formData.email} onChange={handleChange} />
                                </label>
                                <label>Subject:
                                    <input name="subject" type="text" placeholder="Subject..." value={formData.subject} onChange={handleChange} />
                                </label>
                                <label>Message:
                                    <textarea name="message" type="text" class="form-section" cols="45" rows="8" placeholder='Your message...' value={formData.message} onChange={handleChange}></textarea>
                                </label>
                                    {/* <input type="submit"/> */}
                                    <button type="submit" className='button-wide'>Send</button>
                            </div>
                        </div>
                    </form>
                    <div id="email-wave">
                        <svg id="wave1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div> 
                </div>
            </div>
    </div>
    )
}
