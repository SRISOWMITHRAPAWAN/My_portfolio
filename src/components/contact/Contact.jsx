import React, {useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_aya2t1b', 'template_j9ekqmm', form.current, 'jxXMz3O7KxsiS-YkC');
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4> 
                        <h5>rksmithru@gmail.com</h5>
                        <a href="mailto:rksmithru@gmail.com">Email me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4> 
                        <h5>SRISOWMITHRAPAWAN R</h5>
                        <a href='https://www.linkedin.com/in/srisowmithrapawan-r-518209260/' target='_blank'>Message me on LinkedIn!</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;