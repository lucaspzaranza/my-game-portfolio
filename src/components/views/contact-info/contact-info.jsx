import React from 'react';
import './contact-info.css'

import linkedin from '../../../data/images/linkedin.png'
import instagram from '../../../data/images/instagram.png'
import gmail from '../../../data/images/gmail.png'
import github from '../../../data/images/github1.png'
import code from '../../../data/images/code.png'

import { LanguageContext } from '../../../contexts/LanguageContext';
import { useContext } from 'react';
import { contactInfo, languages } from '../../../data/data';
import BackButton from '../../back-btn/back-btn';

export const ContactInfo = () => {
    const {pt} = languages;
    const { lang } = useContext(LanguageContext);
    const Info = lang === pt ? contactInfo.pt : contactInfo.en;

    return (
        <div className="about-menu-container nes-container with-title is-centered">
            <h1 className='text-container'> {Info.title}</h1>
            <br/>
            <h3 className='text-container'> {Info.subtitle}</h3>
            <br/>

            <div className="link-list">
                <div className='link-container'>
                    <a className="contact-anchor-link" href='https://github.com/lucaspzaranza'>
                        <img alt='linkedin' src={github}/>
                        <button type="button" class="nes-btn">Github</button>
                    </a>
                </div>
            
                <div className='link-container'>
                    <a className="contact-anchor-link" href='https://www.linkedin.com/in/lucas-zaranza-74157a60/'>
                        <img alt='linkedin' src={linkedin}/>
                        <button type="button" class="nes-btn">Linkedin</button>
                    </a>
                </div>
            
                <div className='link-container'>
                    <a className="contact-anchor-link" href='https://www.instagram.com/lucaspzaranza/'>
                        <img alt='instagram' src={instagram}/>
                        <button type="button" class="nes-btn link-btn">Instagram</button>
                    </a>
                </div>
            
                <div className='link-container'>
                    <a className="contact-anchor-link" href='mailto:lucaszaranza@gmail.com'>
                        <img alt='gmail' src={gmail}/>
                        <button type="button" class="nes-btn link-btn">Email</button>
                    </a>
                </div>

                {/* <div className='link-container'>
                    <a className="contact-anchor-link" href='https://lucaszaranza.netlify.app/'>
                        <img alt='portfolio' src={code}/>
                        <button type="button" class="nes-btn link-btn">Portfolio</button>
                    </a>
                </div> */}
            </div>
            <BackButton/>
        </div>
    );
}

export default ContactInfo;