import React from 'react'
import './Works.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Portfolio1 from '../../../assets/portfolio-1.png'
import Portfolio2 from '../../../assets/portfolio-2.png'
import Portfolio3 from '../../../assets/portfolio-3.png'
import Portfolio4 from '../../../assets/portfolio-4.png'
import Portfolio5 from '../../../assets/portfolio-5.png'
import Portfolio6 from '../../../assets/portfolio-6.png'





const Works = () => {
  return (
    <section id="works">
      <h2 className='workstitle'>My Works</h2>
        <span className="workDesc">i take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses acheive their goals and create a strong online presence.</span>
         <div className="worksImgs">
              <a href="https://github.com/smitchoksi/BS-web-coderbootstrap.git"><img src={Portfolio1} alt="" className="worksImg" /></a>
              <a href=""><img src={Portfolio2} alt="" className="worksImg" /></a>
              <a href=""><img src={Portfolio3} alt="" className="worksImg" /></a>
              <a href=""><img src={Portfolio4} alt="" className="worksImg" /></a>
              <a href=""><img src={Portfolio5} alt="" className="worksImg" /></a>
              <a href=""><img src={Portfolio6} alt="" className="worksImg" /></a>
          </div>
       {/*<button className="workBtn">See More</button>*/} 
    </section>
  )
}

export default Works
