import React, { useContext } from 'react';
import { madeBy, languages } from '../../data/data';
import {LanguageContext} from '../../contexts/LanguageContext';
import './made-by.css';
import moon from '../../data/images/moon-outline.png'

export const MadeBy = () => {

    const {pt} = languages;
    const { lang } = useContext(LanguageContext);
    const createdBy = lang === pt? madeBy.pt : madeBy.en;

    return (
        <footer>
            <div className='black-container'>
                <h4 style={{'color':'white'}}>
                    {createdBy}
                    <img className='footer-img' alt="moon" src={moon}/>
                </h4>
            </div>
        </footer>
    );
}