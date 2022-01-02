import React, { useContext } from 'react';
import { madeBy, languages } from '../../data/data';
import {LanguageContext} from '../../contexts/LanguageContext';
import './made-by.css';
import mushroom from '../../data/images/moon-outline.png'

export const MadeBy = () => {

    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const createdBy = langContext[0] === pt? madeBy.pt : madeBy.en;

    return (
        <footer >
            <div className='black-container'>
                <h4 style={{'color':'white'}}>
                    {createdBy}
                    <img className='footer-img' alt="mushroom" src={mushroom}/>
                </h4>
            </div>
        </footer>
    );
}