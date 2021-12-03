import React, { useContext } from 'react';
import {LanguageContext} from '../../contexts/LanguageContext';
import { aboutMe, languages, backBtn } from '../../data/data';
import me from '../../data/images/robot-frame-with-me.png';
import './about-me.css';
import { Link } from 'react-router-dom';
import "rpgui/rpgui.js"
import "rpgui/rpgui.css"

export const AboutMe = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const about = langContext[0] === pt ? aboutMe.pt : aboutMe.en;
    const backButton = langContext[0] === pt ? backBtn.pt : backBtn.en;

    return (
        <div className="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{about.title}</h5>

            <div className="hero-status">
                <div>
                    <img alt="me" src={me} className="profile-pic"/>
                </div>

                <div>
                    <h3>Player Status:</h3>
                    <progress class="nes-progress" value="90" max="100"></progress>
                    <progress class="nes-progress is-primary" value="80" max="100"></progress>
                    <progress class="nes-progress is-success" value="50" max="100"></progress>
                    <progress class="nes-progress is-warning" value="30" max="100"></progress>
                    <progress class="nes-progress is-error" value="10" max="100"></progress>
                    <progress class="nes-progress is-pattern" value="50" max="100"></progress>
                </div>
            </div>

            <div className="hero-description is-centered">
                {
                    about.paragraphs.map(paragraph => (
                        <h3>{paragraph}</h3>
                    ))
                }
                </div>

            <Link className="nes-btn menu-item-btn" to='/' style={{float:'left'}}>{backButton}</Link>
        </div>
    )
}

export default AboutMe;