import React from 'react';
import './project-cartridge.css';

export const ProjectCartridge = ({projectIndex, name, image}) => {

    return (
        <div className='cartridge-container'>
            <h2 className='game-title'>{name}</h2>
            <div className="project-container" onClick={() => document.getElementById('dialog-rounded-' + projectIndex).showModal()}>
                <img alt="gameImage" className='game-image' src={image}/>
            </div>
        </div>
     );
}

export default ProjectCartridge;