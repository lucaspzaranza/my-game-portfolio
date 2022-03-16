import { React, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import "./header-component.css"

import { headData, languages } from '../../data/data.js'

export const HeaderComponent = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const data = langContext[0] === pt ? headData.pt : headData.en;

    return (
        <div>
            <div className="home-menu-container nes-container is-centered">
                <h2 class='project-title'>{data.title}</h2>
                <span className='subtitle'><strong>{data.subtitle} <span><i className="snes-logo"/></span></strong></span>
            </div>
        </div>
    )
}