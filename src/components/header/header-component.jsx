import { React, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import "./header-component.css"

import { headData, mainMenu, languages } from '../../data/data.js'
import { LangButtonsMenu } from '../lang-buttons/lang-buttons.jsx';

const pt = languages.pt;
const en = languages.en;

export const HeaderComponent = () => {
    const langContext = useContext(LanguageContext);
    const data = langContext[0] === pt ? headData.pt : headData.en;
    const menu = langContext[0] === pt ? mainMenu.pt : mainMenu.en;

    return (
        <div>
            <LangButtonsMenu/>
            <div className="header-container nes-container is-centered">
                <h2>{data.title}</h2>
                <h5>{data.subtitle} <span> <i class="snes-logo"/></span></h5>
            </div>
        </div>
    )
}