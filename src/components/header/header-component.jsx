import React from 'react';
import "nes.css/css/nes.min.css";
import "rpgui/rpgui.min.css"
import "rpgui/rpgui.min.js"
import { LanguageConsumer } from '../../contexts/LanguageContext.js';

import { headData } from '../../data/data.js'
import { NavBar } from '../nav/navbar.jsx';

const headDataTitle = headData.ptBR;

console.log(LanguageConsumer);

export const HeaderComponent = (props) => (
    <LanguageConsumer>{(context) => {
        return (
            <div>
                <NavBar/>
                <h3> {headDataTitle.title}</h3>
                <h4> {headDataTitle.subtitle}</h4>
                <h3>Estou no idioma: {context.lang}</h3>
                <button type="button" className="nes-btn is-primary">Ver mais</button>
            </div>
        )}}
    </LanguageConsumer>
);