import React, { useContext } from 'react';
import {mainMenu, languages} from '../../data/data';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import './main-menu.css';
import "../../App.css";

export const MainMenu = () => {
    const {pt, en} = languages;
    const langContext = useContext(LanguageContext);
    const menu = langContext[0] === pt ? mainMenu.pt : mainMenu.en;

    return ( 
        <div className="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{menu.selectOption}</h5>
            <ul className="no-bullets">
                {
                    menu.menuOptions.map(option => (
                        <li>
                            <a className="nes-btn menu-item-btn" href="#">{option}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default MainMenu;