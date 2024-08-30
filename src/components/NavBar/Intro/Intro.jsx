import React, {useEffect, useRef } from 'react';
import './Intro.css';
import bg from '../../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../../assets/hireme.png'
import Typed from 'typed.js';



const Intro = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
      strings:[ "Website Designer", "React Developer", "Python Developer", "Fronted Develpoer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    }

    const typed = new Typed(typedRef.current, options)

    return () =>{
      typed.destroy()
    }
  }, [])
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introtext">I'm <span className="introname">Smit</span> <br /> <span ref={typedRef}>Website Designer</span></span>
            <p className="introPara">
                I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.
            </p>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
      
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
