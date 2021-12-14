import React, { useContext } from 'react';
import "nes.css/css/nes.min.css";
import './my-projects.css'

import { myProjects, languages } from '../../../data/data';
import LanguageContext from '../../../contexts/LanguageContext';
import BackButton from '../../back-btn/back-btn';
import ProjectCartridge from '../../project-cartridge/project-cartridge';

import penosasStrike from '../../../data/images/game-project-images/penosas-portfolio.png';
import matchGame from '../../../data/images/game-project-images/jogo-da-memoria.png';
import bomberman from '../../../data/images/game-project-images/super-bomberman.png';
import flappyBird from '../../../data/images/game-project-images/flappy-bird.png';
import roleta from '../../../data/images/game-project-images/roleta.png';
import slotMachine from '../../../data/images/game-project-images/slot-machine.png';
import doomOfThePenosas from '../../../data/images/game-project-images/doom-of-the-penosas.png';
import snake from '../../../data/images/game-project-images/snake.png';
import diepIo from '../../../data/images/game-project-images/diep.io.png';
import virtualKeyboard from '../../../data/images/game-project-images/virtual-keyboard.png';

export const MyProjects = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const title = langContext[0] === pt ? myProjects.pt.title : myProjects.en.title;
    const projects = langContext[0] === pt ? myProjects.pt.projects : myProjects.en.projects;
    const select = langContext[0] === pt ? myProjects.pt.select : myProjects.en.select;

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

    const diag = document.getElementById('dialog-default');
    console.log(diag);
    
    return (
        <div class="menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{title}</h5>
            <h4 style={{'marginBottom': '30px'}}>{select}</h4>

            <dialog class="nes-dialog" id="dialog-default">
                <form method="dialog">
                <p class="title">Dialog</p>
                <p>Alert: this is a dialog.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn">Cancel</button>
                    <button class="nes-btn is-primary">Confirm</button>
                </menu>
                </form>
            </dialog>

            <div className="project-cartridges">
            {
                projects.map(project => (
                    <ProjectCartridge name={project.name} image={images[projects.indexOf(project)]}/>
                ))
            }
            </div>

            <BackButton/>
        </div>
    );
}

export default MyProjects;