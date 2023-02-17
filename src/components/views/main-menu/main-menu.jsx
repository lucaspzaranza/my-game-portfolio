import React, { useContext } from 'react';
import {mainMenu, languages} from '../../../data/data';
import { LanguageContext } from '../../../contexts/LanguageContext.js';
import './main-menu.css';
import "../../../App.css";
import { HeaderComponent } from '../../header-component/header-component';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
    const {pt} = languages;
    const { lang } = useContext(LanguageContext);
    const menu = lang === pt ? mainMenu.pt : mainMenu.en;

    return ( 
        <div>
        <HeaderComponent/>
            <div className="home-menu-container nes-container with-title is-centered">
                <h5 className="menu-container-title title"><strong>{menu.selectOption}</strong></h5>
                <ul className="no-bullets">
                    {
                        menu.menuOptions.map(option => (
                            <li key={option.router}>
                                <Link className="nes-btn menu-item-btn" to={'/' + option.router}><strong>{option.desc}</strong></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;