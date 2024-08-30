import React, { useRef } from 'react'
import './Contact.css'
import Walmart from '../../../assets/walmart.png'
import Adobe from '../../../assets/adobe.png'
import Microsoft from '../../../assets/microsoft.png'
import Facebook from '../../../assets/facebook.png'
import TwitterIcon from '../../../assets/twitter.png'
import YoutubeIcon from '../../../assets/youtube.png'
import InsatagramIcon from '../../../assets/instagram.png'
import Facebookicon from '../../../assets/facebook-icon.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ltbxg4a', 'template_xmhgher', form.current, 'q_I0sBa_GSWFp6rV1')
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent Successfully');
            },
            (error) => {
              alert("something's are wrong",error.text);
            },
          );
      };
    
    

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTiltle">
                My Clients
            </h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. some of the notable companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Adobe} alt="client" className="clientImg" />
                <img src={Microsoft} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Conatct Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities </span>


            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' required />
                <input type="email" className="email" placeholder='Your Email' name='your_email' required />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                
                <div className="links">
                    <a href="https://www.facebook.com/share/pETN2C4jpACo2zyN/?mibextid=LQQJ4d"><img src={Facebookicon} alt="facebook" className="link" /></a> 
                    <a href=""><img src={TwitterIcon} alt="twitter" className="link" /></a>
                    <a href=""><img src={YoutubeIcon} alt="youtube" className="link" /></a>
                    <a href="https://www.instagram.com/smit_choksi_15?igsh=MWg1ajdlMjN2bDVkYQ=="><img src={InsatagramIcon} alt="instagram" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
