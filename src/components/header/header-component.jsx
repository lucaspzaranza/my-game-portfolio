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
            <div className="menu-container nes-container is-centered">
                <h2>{data.title}</h2>
                <h5>{data.subtitle} <span><i class="snes-logo"/></span></h5>
            </div>
        </div>
    )
}