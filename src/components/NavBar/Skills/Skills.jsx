import React from 'react'
import './Skills.css'
import UIDesign from '../../../assets/ui-design.png';
import WebDesign from '../../../assets/website-design.png'
import AppDesign from '../../../assets/app-design.png'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. i am proficient in HTML,CSS, and JavaScript,as well as design software such as Adobe Photoshop and illustrator</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is demo text, you can write your content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design Design</h2>
                    <p>This is demo text, you can write your content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo text, you can write your content here.</p>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Skills
