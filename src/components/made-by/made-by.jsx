import React, { useContext } from 'react';
import { madeBy, languages } from '../../data/data';
import {LanguageContext} from '../../contexts/LanguageContext';
import './made-by.css';

export const MadeBy = () => {

    const {pt, en} = languages;
    const langContext = useContext(LanguageContext);
    const createdBy = langContext[0] === pt? madeBy.pt : madeBy.en;

    return (
        <footer>
            <span>
                <h4>{createdBy}</h4>
            </span>
        </footer>
    );
}