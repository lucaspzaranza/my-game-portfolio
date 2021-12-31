import React from 'react';
import './contact-info.css'

import linkedin from '../../../data/images/linkedin.png'
import instagram from '../../../data/images/instagram.png'
import gmail from '../../../data/images/gmail.png'
import github1 from '../../../data/images/github1.png'

import LanguageContext from '../../../contexts/LanguageContext';
import { useContext } from 'react';
import { contactInfo, languages } from '../../../data/data';
import BackButton from '../../back-btn/back-btn';

export const ContactInfo = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const Info = langContext[0] === pt ? contactInfo.pt : contactInfo.en;

    return (
        <div className="menu-container nes-container with-title is-centered">
            <h1> {Info.title}</h1>
            <h3> {Info.subtitle}</h3>

            <div className="link-list">
                <a className="contact-anchor-link" href='https://github.com/lucaspzaranza'>
                    <img alt='linkedin' src={github1}/>
                    <button type="button" class="nes-btn">Github</button>
                </a>

                <a className="contact-anchor-link" href='https://www.linkedin.com/in/lucas-zaranza-74157a60/'>
                    <img alt='linkedin' src={linkedin}/>
                    <button type="button" class="nes-btn">Linkedin</button>
                </a>
            
                <a className="contact-anchor-link" href='https://www.instagram.com/lucaspzaranza/'>
                    <img alt='instagram' src={instagram}/>
                    <button type="button" class="nes-btn">Instagram</button>
                </a>

                <a className="contact-anchor-link" href='mailto:lucaszaranza@gmail.com'>
                    <img alt='gmail' src={gmail}/>
                    <button type="button" class="nes-btn">Email</button>
                </a>
            </div>

            <BackButton/>
        </div>
    );
}

export default ContactInfo;