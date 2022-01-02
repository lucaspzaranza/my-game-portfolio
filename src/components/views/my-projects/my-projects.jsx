import React, { useContext } from 'react';
import "nes.css/css/nes.min.css";
import './my-projects.css'

import { myProjectsData, myProjectsLinks, myProjectsYears, languages } from '../../../data/data'
import Carousel from "framer-motion-carousel";
import LanguageContext from '../../../contexts/LanguageContext';
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
import ProjectDialogDetails from '../../project-dialog-details/project-dialog-details';
import { CarouselArrow } from '../../carousel-arrow/carousel-arrow';

export const MyProjects = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const title = langContext[0] === pt ? myProjectsData.pt.title : myProjectsData.en.title;
    const projects = langContext[0] === pt ? myProjectsData.pt.data : myProjectsData.en.data;
    const projectsLinks = myProjectsLinks;
    const years = myProjectsYears;
    const select = langContext[0] === pt ? myProjectsData.pt.select : myProjectsData.en.select;

    const images = [
        bomberman, roleta, flappyBird, catchGame, slotMachine, matchGame, virtualKeyboard,
        penosasStrike, mathFactory, doomOfThePenosas, snake, diepIo
    ]
    
    return (
        <div className="about-menu-container nes-container with-title is-centered">
            <h5 className="menu-container-title title">{title}</h5>
            <div className='project-subtitle'>
                <h4 className='text-container'><strong>{select}</strong></h4>
            </div>
            
            <Carousel interval={3000} autoPlay={false}
                renderArrowLeft={({handlePrev}) => <CarouselArrow isLeft={true} handleArrow={handlePrev}/>} 
                renderArrowRight={({handleNext}) => <CarouselArrow isLeft={false} handleArrow={handleNext}/>} 
            >
            {
               
                projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCartridge name={project.name} projectIndex={index} image={images[index]}/>
                        <ProjectDialogDetails projectIndex={index} year={years[index]} links={projectsLinks[index]}
                            title={project.name} description={project.description}/>
                    </div>
            ))}
            </Carousel>

            <BackButton/>
        </div>
    );
}

export default MyProjects;