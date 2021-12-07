import React, { useContext } from 'react';
import {LanguageContext} from '../../contexts/LanguageContext';
import { aboutMe, languages, backBtn, playerStatus, playerInfo } from '../../data/data';
import PlayerStatusBar from '../player-status-bar/player-status-bar';

import me from '../../data/images/robot-frame-with-me-2.png';
import './about-me.css';
import { Link } from 'react-router-dom';

export const AboutMe = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const about = langContext[0] === pt ? aboutMe.pt : aboutMe.en;
    const signature = aboutMe.signature;
    const backButton = langContext[0] === pt ? backBtn.pt : backBtn.en;
    const status = langContext[0] === pt ? playerStatus.pt : playerStatus.en;
    const info = langContext[0] === pt ? playerInfo.pt : playerInfo.en;
    const email = playerInfo.email;

    return (
        <div className="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{about.title}</h5>

            <div className="hero-status">
                <div style={{display:'block'}}>
                    <img alt="me" src={me} className="profile-pic"/>
                    <div className="player-info">
                        <ul style={{listStyle:'none'}}>
                            <li>{info.age}</li>

                            <li>{info.local}</li>

                            <li>{email}</li>
                        </ul>
                    </div>
                </div>

                <div style={{width:'36%'}}>
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

            <div className="hero-description">
                {
                    about.paragraphs.map(paragraph => (
                        <p className="description-paragraph">{paragraph}</p>
                    ))
                }

                    <p><strong>{signature}</strong></p>
                </div>

            <Link className="nes-btn menu-nav-button" to='/'>{backButton}</Link>
        </div>
    )
}

export default AboutMe;