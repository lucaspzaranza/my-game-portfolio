import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { languages, backBtn } from '../../data/data.js';
import LanguageContext from '../../contexts/LanguageContext';

const BackButton = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const backButton = langContext[0] === pt ? backBtn.pt : backBtn.en;

    return (
        <Link className="nes-btn menu-nav-button" to='/'>{backButton}</Link>
    )
}

export default BackButton;
