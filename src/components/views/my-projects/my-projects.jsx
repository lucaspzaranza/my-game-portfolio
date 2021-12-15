import React, { useContext, useRef } from 'react';
import "nes.css/css/nes.min.css";
import './my-projects.css'

import { myProjects, languages } from '../../../data/data'
import Carousel from "framer-motion-carousel";
import LanguageContext from '../../../contexts/LanguageContext';
import BackButton from '../../back-btn/back-btn';
import ProjectCartridge from '../../project-cartridge/project-cartridge';

import penosasStrike from '../../../data/images/game-project-images/cartridges/penosas-strike-cartridge.png';
import matchGame from '../../../data/images/game-project-images/cartridges/match-game-cartridge.png';
import bomberman from '../../../data/images/game-project-images/cartridges/super-bomberman-4-cartridge.png';
import flappyBird from '../../../data/images/game-project-images/cartridges/flappy-bird-cartridge.png';
import roleta from '../../../data/images/game-project-images/cartridges/roleta-cartridge.png';
import slotMachine from '../../../data/images/game-project-images/cartridges/slot-machine-cartridge.png';
import doomOfThePenosas from '../../../data/images/game-project-images/cartridges/doom-of-the-penosas-cartridge.png';
import snake from '../../../data/images/game-project-images/cartridges/snake-cartridge.png';
import diepIo from '../../../data/images/game-project-images/cartridges/diep.io-cartridge.png';
import virtualKeyboard from '../../../data/images/game-project-images/cartridges/virtual-keyboard-cartridge.png';

export const MyProjects = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const title = langContext[0] === pt ? myProjects.pt.title : myProjects.en.title;
    const projects = langContext[0] === pt ? myProjects.pt.projects : myProjects.en.projects;
    const select = langContext[0] === pt ? myProjects.pt.select : myProjects.en.select;

    const ref = useRef(null);

    const images = [
        bomberman,
        flappyBird,
        roleta,
        slotMachine,
        matchGame,
        penosasStrike,
        doomOfThePenosas,
        snake,
        diepIo,
        virtualKeyboard
    ]

    const colors = ["#f90", "#ef0", "#e0f"];

    const diag = document.getElementById('dialog-default');
    console.log(diag);
    
    return (
        <div class="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{title}</h5>
            <h4 style={{'marginBottom': '30px'}}>{select}</h4>

            <Carousel interval={3000} autoPlay="false">
            {
                projects.map(project => (
                    <ProjectCartridge name={project.name} image={images[projects.indexOf(project)]}/>
            ))}
            </Carousel>

            <BackButton/>
        </div>
    );
}

export default MyProjects;