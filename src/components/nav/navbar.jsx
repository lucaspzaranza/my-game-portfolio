import React from 'react';
import "nes.css/css/nes.min.css";
import "rpgui/rpgui.min.css"
import "rpgui/rpgui.min.js"
import { LanguageConsumer } from '../../contexts/LanguageContext.js';
import Flags from 'country-flag-icons/react/3x2'

export const NavBar = () => 
{
    return (
        <LanguageConsumer>{(context) => {
            return (
                <nav>
                    <Flags.BR title="Brazil" className="br-flag" />
                </nav>
            )}}
        </LanguageConsumer>
    )
}
