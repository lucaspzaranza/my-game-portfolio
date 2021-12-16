import React, {useContext} from 'react';
import "nes.css/css/nes.min.css";
import './project-dialog-details.css'

import LanguageContext from '../../contexts/LanguageContext';
import { languages, closeBtn, projectLinksButtons } from '../../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';

import bomberman from '../../data/images/game-project-images/super-bomberman.png';
import flappyBird from '../../data/images/game-project-images/flappy-bird.png';
import roleta from '../../data/images/game-project-images/roleta.png';
import catchGame from '../../data/images/game-project-images/catch-game.png';
import slotMachine from '../../data/images/game-project-images/slot-machine.png';
import matchGame from '../../data/images/game-project-images/jogo-da-memoria.png';
import virtualKeyboard from '../../data/images/game-project-images/virtual-keyboard.png';
import penosasStrike from '../../data/images/game-project-images/penosas-portfolio.png';
import mathFactory from '../../data/images/game-project-images/math-factory.png';
import doomOfThePenosas from '../../data/images/game-project-images/doom-of-the-penosas.png';
import snake from '../../data/images/game-project-images/snake.png';
import diepIo from '../../data/images/game-project-images/diep.io.png';

export const ProjectDialogDetails = ({projectIndex, title, description, repo, demo}) => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const closeButton = langContext[0] === pt ? closeBtn.pt : closeBtn.en;
    const linksButtons = langContext[0] === pt ? projectLinksButtons.pt : projectLinksButtons.en;
    
    const images = [
        bomberman, flappyBird, roleta, catchGame, slotMachine, matchGame, virtualKeyboard, 
        penosasStrike, mathFactory, doomOfThePenosas, snake, diepIo
    ]

    return (
        <section>
            <dialog className="nes-dialog is-rounded" id={"dialog-rounded-" + projectIndex}>
                <form method="dialog">
                    <h2 className="title">{title}</h2>
                    <img alt="projectImg" className="project-image" 
                        src={images[projectIndex]} style={{'marginBottom': '30px'}}/>
                    {
                        description.map(paragraph => (
                            <p className="project-description"><strong>{paragraph}</strong></p>
                        ))
                    }

                    <div className="project-links">
                        <FontAwesomeIcon icon={faGithubSquare} style={{'fontSize': '100'}}/>
                        <div className="nes-balloon from-left custom-baloon">
                            <p>{linksButtons.github}</p>
                        </div>

                        <i className="snes-jp-logo" style={{'transform': 'scale(1.7)'}}></i>
                        <div className="nes-balloon from-left custom-baloon">
                            <p>{linksButtons.demo}</p>
                        </div>
                    </div>

                    <menu className="dialog-menu">
                        <button className="nes-btn is-primary">{closeButton}</button>
                        <button className="nes-btn is-error close-button">X</button>
                    </menu>
                </form>
            </dialog>
        </section>
    );
}

export default ProjectDialogDetails;