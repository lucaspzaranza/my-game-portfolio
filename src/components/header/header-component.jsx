import { React, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';

import "nes.css/css/nes.min.css";
import "rpgui/rpgui.min.css"
import "rpgui/rpgui.min.js"

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
            <br/>
            <div class="nes-container with-title is-centered is-rounded">
                <h4 class="title">{menu}</h4>
                <h3> {data.title}</h3>
                <h4> {data.subtitle}</h4>
                <button type="button" className="nes-btn is-primary">Ver mais</button>
            </div>
        </div>
    )
}