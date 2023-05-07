import React, { useContext } from 'react';
import "nes.css/css/nes.min.css";
import './my-projects.css'

import { myProjectsData, yearMade } from '../../../data/data'
import { LanguageContext } from '../../../contexts/LanguageContext';
import BackButton from '../../back-btn/back-btn';
import ProjectCartridge from '../../project-cartridge/project-cartridge';

import penosasStrike from '../../../data/images/game-project-images/cartridges/penosas-strike-cartridge.png';
import matchGame from '../../../data/images/game-project-images/cartridges/match-game-cartridge.png';
import bomberman from '../../../data/images/game-project-images/cartridges/super-bomberman-4-cartridge.png';
import roleta from '../../../data/images/game-project-images/cartridges/roleta-cartridge.png';
import flappyBird from '../../../data/images/game-project-images/cartridges/flappy-bird-cartridge.png';
import slotMachine from '../../../data/images/game-project-images/cartridges/slot-machine-cartridge.png';
import doomOfThePenosas from '../../../data/images/game-project-images/cartridges/doom-of-the-penosas-cartridge.png';
import snake from '../../../data/images/game-project-images/cartridges/snake-cartridge.png';
import diepIo from '../../../data/images/game-project-images/cartridges/diep.io-cartridge.png';
import virtualKeyboard from '../../../data/images/game-project-images/cartridges/virtual-keyboard-cartridge.png';
import mathFactory from '../../../data/images/game-project-images/cartridges/math-factory-cartridge.png';
import catchGame from '../../../data/images/game-project-images/cartridges/catch-game-cartridge.png';
import rg from '../../../data/images/game-project-images/cartridges/rg-cartridge.png';
import emocionometro from '../../../data/images/game-project-images/cartridges/emotionmeter-cartridge.png';
import insta from '../../../data/images/game-project-images/cartridges/insta-cartridge.png';
import meshGame from '../../../data/images/game-project-images/cartridges/mesh-cartridge.png';
import cursiveLetter from '../../../data/images/game-project-images/cartridges/cursive-cartridge.png';
import puzzleTime from '../../../data/images/game-project-images/cartridges/puzzle-cartridge.png';
import fantasyOrReality from '../../../data/images/game-project-images/cartridges/fantasy-cartridge.png';
import supermarketGame from '../../../data/images/game-project-images/cartridges/supermarket-cartridge.png';
import runnerGame from '../../../data/images/game-project-images/cartridges/runner-cartridge.png';

import ProjectDialogDetails from '../../project-dialog-details/project-dialog-details';

export const MyProjects = () => {
    const { lang } = useContext(LanguageContext);
    const title = myProjectsData.title[lang];
    const projects = myProjectsData.data;
    const select = myProjectsData.select[lang];
    const yearText = yearMade[lang];

    const images = [
        bomberman, roleta, flappyBird, catchGame, slotMachine, matchGame, virtualKeyboard,
        penosasStrike, mathFactory, doomOfThePenosas, snake, diepIo, bomberman, rg, emocionometro,
        insta, meshGame, cursiveLetter, puzzleTime, fantasyOrReality, supermarketGame, runnerGame
    ]

    return (
        <div className="about-menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{title}</h5>
            <div className='project-subtitle'>
                <h4 className='text-container'><strong>{select}</strong></h4>
            </div>

            <div class='cartridges'>
                {
                    projects.map((project, index) => (
                        <div  key={index}>
                            <ProjectCartridge name={project.texts.name[lang]} projectIndex={index} image={images[index]}/>
                            <ProjectDialogDetails projectIndex={index} language={lang} yearText={yearText} year={project.year} links={project.links}
                                title={project.texts.name[lang]} description={project.texts.description[lang]}/>
                        </div>
                ))}
            </div>

            <BackButton/>
        </div>
    );
}

export default MyProjects;