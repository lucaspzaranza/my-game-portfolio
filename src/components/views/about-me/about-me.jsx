import React, { useContext } from 'react';
import { WiredImage } from "wired-elements-react";
import {LanguageContext} from '../../../contexts/LanguageContext';
import { aboutMe, languages, playerStatus, playerInfo } from '../../../data/data';
import PlayerStatusBar from '../../player-status-bar/player-status-bar';

import me from '../../../data/images/me.jpeg';
import mmxHelmet from '../../../data/images/mmx-helmet.png';
import './about-me.css';
import BackButton from '../../back-btn/back-btn';

export const AboutMe = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const about = langContext[0] === pt ? aboutMe.pt : aboutMe.en;
    const signature = aboutMe.signature;
    const status = langContext[0] === pt ? playerStatus.pt : playerStatus.en;
    const info = langContext[0] === pt ? playerInfo.pt : playerInfo.en;
    const email = playerInfo.email;

    return (
        <div className="about-menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{about.title}</h5>

            <div className="hero-status">
                <div className='hero-general-info'>
                    <WiredImage elevation="5" src={me} className="profile-pic"/>
                    
                    <div className="player-info">
                        <p className='player-info-text-container'>
                            {info.age}
                            <br/>
                            {info.local}
                            <br/>
                            {email}
                        </p>
                    </div>
                </div>

                <div className='hero-status-bar-container'>
                    <h3 className='text-container'>{status.title}:</h3>

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
                        <p className="description-paragraph text-container">{paragraph}</p>
                    ))
                }

                <p className='text-container'><strong>{signature}</strong> <img alt="mmx" src={mmxHelmet} style={{marginBottom:15}}/></p>
            </div>

            <BackButton/>
        </div>
    )
}

export default AboutMe;