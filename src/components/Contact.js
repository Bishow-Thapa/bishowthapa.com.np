import React from 'react';
import ReactToolTip from 'react-tooltip';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { VscMail } from 'react-icons/vsc'


export default function Contact()
{
    const contact = (
        <>
            <h3>Keep In Touch With Me</h3>
            <p>Email Me at <VscMail/> <br/><code data-tip="Bishow Thapa Email"><mark>itsmebishowthapa@gmail.com</mark></code></p>
            <div>
                <ul>
                    <li><a href="https://github.com/Bishow-Thapa" rel="noreferrer noopener" target="_blank" data-tip="Bishow-Thapa">Github </a><FiGithub/></li>
                    <li><a href="https://twitter.com/BishowThapa12" rel="noreferrer noopener" target="_blank" data-tip="@BishowThapa12">Twitter </a><FiTwitter/></li>
                    <li><a href="https://www.linkedin.com/in/bishowthapa/" rel="noreferrer noopener" target="_blank" data-tip="bishowthapa">LinkedIn </a><FiLinkedin/></li>
                </ul>
            </div>
            <ReactToolTip/>
        </>
    );
    return contact;
}