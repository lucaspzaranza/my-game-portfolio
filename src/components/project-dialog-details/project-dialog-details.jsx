import React, {useContext} from 'react';
import "nes.css/css/nes.min.css";
import './project-dialog-details.css'

import { LanguageContext } from '../../contexts/LanguageContext';
import { languages, closeBtn, projectLinksButtons, yearMade } from '../../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/';

import bomberman from '../../data/images/game-project-images/super-bomberman.png';
import roleta from '../../data/images/game-project-images/roleta.png';
import flappyBird from '../../data/images/game-project-images/flappy-bird.png';
import catchGame from '../../data/images/game-project-images/catch-game.png';
import slotMachine from '../../data/images/game-project-images/slot-machine.png';
import matchGame from '../../data/images/game-project-images/jogo-da-memoria.png';
import virtualKeyboard from '../../data/images/game-project-images/virtual-keyboard.png';
import penosasStrike from '../../data/images/game-project-images/penosas-portfolio.png';
import mathFactory from '../../data/images/game-project-images/math-factory.png';
import doomOfThePenosas from '../../data/images/game-project-images/doom-of-the-penosas.png';
import snake from '../../data/images/game-project-images/snake.png';
import diepIo from '../../data/images/game-project-images/diep.io.png';
import { WiredCard } from 'wired-elements-react';

export const ProjectDialogDetails = ({projectIndex, title, description, year, links}) => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const closeButton = langContext[0] === pt ? closeBtn.pt : closeBtn.en;
    const yearTxt = langContext[0] === pt ? yearMade.pt : yearMade.en;
    const linksButtons = langContext[0] === pt ? projectLinksButtons.pt : projectLinksButtons.en;
    
    const images = [
        bomberman, roleta, flappyBird, catchGame, slotMachine, matchGame, virtualKeyboard, 
        penosasStrike, mathFactory, doomOfThePenosas, snake, diepIo, bomberman
    ]

    return (
        <section>
            <dialog className="nes-dialog is-rounded black-bg" id={"dialog-rounded-" + projectIndex}>
                <form method="dialog">
                    <WiredCard elevation={5}>
                        <span className="title"><strong>{title}</strong></span>
                    </WiredCard>
                    <br/>
                    <img alt="projectImg" className="project-image" 
                        src={images[projectIndex]} style={{'marginBottom': '30px'}}/>

                    <p className="project-description">
                        <WiredCard elevation={5}> 
                                <strong>
                                    {yearTxt}: {year}
                                </strong>
                        </WiredCard>
                    </p>

                    {
                        description.map(paragraph => (
                            <p className="project-description">
                                <WiredCard elevation={5}> 
                                    <strong>
                                        {paragraph}
                                    </strong>
                                </WiredCard>
                            </p>
                        ))
                    }

                    <div className="project-links-container">
                    {
                        links.repo && 
                        <a className="project-link" href={links.repo}>
                            <FontAwesomeIcon icon={faGithubSquare} className='link-icon'
                                style={{'color': 'black'}}/>
                            <div className="nes-balloon from-left custom-baloon">
                                <p><strong>{linksButtons.github}</strong></p>
                            </div>
                        </a>
                    }
                    
                    {
                        links.demo &&
                        <a className="project-link" href={links.demo}>
                            <i className="snes-jp-logo" style={{'transform': 'scale(1.7)'}}></i>
                            <div className="nes-balloon from-left custom-baloon">
                                <p><strong>{linksButtons.demo}</strong></p>
                            </div>
                        </a>
                    }

                    {
                        links.youtube &&
                        <a className="project-link" href={links.youtube}>
                            <FontAwesomeIcon icon={faYoutube} className='link-icon'
                                style={{'color': 'red'}}/>
                            <div className="nes-balloon from-left custom-baloon">
                                <p><strong>{linksButtons.youtube}</strong></p>
                            </div>
                        </a>
                    }
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