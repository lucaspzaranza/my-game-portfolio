import React, { useContext } from 'react';
import {mainMenu, languages} from '../../../data/data';
import { LanguageContext } from '../../../contexts/LanguageContext.js';
import './main-menu.css';
import "../../../App.css";
import { HeaderComponent } from '../../header/header-component';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const menu = langContext[0] === pt ? mainMenu.pt : mainMenu.en;

    return ( 
        <div>
        <HeaderComponent/>
            <div className="menu-container nes-container with-title is-centered">
                <h5 className="menu-container-title title">{menu.selectOption}</h5>
                <ul className="no-bullets">
                    {
                        menu.menuOptions.map(option => (
                            <li>
                                <Link className="nes-btn menu-item-btn" to={'/' + option.router}>{option.desc}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;