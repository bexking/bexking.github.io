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
                history.push("/home"); // Redirect after form is finished submitting. You can change this
            })
      };
      
    return (
        <div>
           <div className="work-feature">
                <div id='feature-section'>
                    <div className='bio-container'>
                        <h1 id="bio-h1">Whakapā mai</h1>
                        <p className='intro-large'>
                            Kia ora. Thanks for visiting my portfolio. If you'd like to get in touch, flick me an email using the form. </p>
                    </div>
                
                    <form onSubmit={handleSubmit}>
                        <div className='contact-form'>
                            <div className='fields'>
                            <h2 className='contact form-box'>Contact form</h2>
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
                </div>
            </div>
    </div>
    )
}
