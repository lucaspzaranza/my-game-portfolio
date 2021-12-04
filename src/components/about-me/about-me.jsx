import React, { useContext } from 'react';
import {LanguageContext} from '../../contexts/LanguageContext';
import { aboutMe, languages, backBtn, playerStatus } from '../../data/data';
import PlayerStatusBar from '../player-status-bar/player-status-bar';

import me from '../../data/images/robot-frame-with-me.png';
import './about-me.css';
import { Link } from 'react-router-dom';

export const AboutMe = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const about = langContext[0] === pt ? aboutMe.pt : aboutMe.en;
    const backButton = langContext[0] === pt ? backBtn.pt : backBtn.en;
    const status = langContext[0] === pt ? playerStatus.pt : playerStatus.en;

    return (
        <div className="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{about.title}</h5>

            <div className="hero-status">
                <div>
                    <img alt="me" src={me} className="profile-pic"/>
                </div>

                <div style={{width:'40%'}}>
                    <h3>{status.title}:</h3>

                    <PlayerStatusBar name={status.coding} value="85"/>
                    <PlayerStatusBar color="blue" name={status.unity} value="75"/>
                    <PlayerStatusBar name={status.creativity} value="90"/>
                    <PlayerStatusBar color="blue" name={status.teamWork} value="70"/>
                    <PlayerStatusBar color="blue" name={status.gameDesign} value="65"/>
                    <PlayerStatusBar color="green" name={status.pixelArt} value="55"/>
                    <PlayerStatusBar color="red" name={status.gameAudio} value="40"/>
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