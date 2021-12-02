import React, { useContext } from 'react';
import {LanguageContext} from '../../contexts/LanguageContext';
import { aboutMe, languages } from '../../data/data';

export const AboutMe = () => {
    const {pt, en} = languages;
    const langContext = useContext(LanguageContext);
    const about = langContext[0] === pt ? aboutMe.pt : aboutMe.en;

    return (
        <div className="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">About me</h5>
            {
                about.paragraphs.map(paragraph => (
                    <h3>{paragraph}</h3>
                ))
            }
        </div>
    )
}

export default AboutMe;