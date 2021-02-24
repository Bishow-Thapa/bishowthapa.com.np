import React from 'react';
import '../App.css'
import AboutPic from '../images/myaboutpic.png'
import ReactToolTip from 'react-tooltip'

import { CgHeart } from 'react-icons/cg';

export default function About()
{
    const aboutme = (
        <>
            <div className="OuterDiv">
                <img src={AboutPic} alt="aboutme" className="InnerDiv"/>
            </div>
            <p className="AboutIntro">
                Hello. I'm Bishow Thapa from <span data-tip="Country">Nepal</span>.
                Software Engineer.<br/>
                Graduated from <span data-tip="University in Leeds, England">Leeds Beckett University</span>.
                I love <CgHeart/> open source. 
            </p>
            <span className="flip AboutIntro">
                Full Stack Developer
            </span>
            <ReactToolTip/>
        </>
    );
    return aboutme;
}