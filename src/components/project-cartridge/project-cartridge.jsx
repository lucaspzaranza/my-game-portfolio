import React from 'react';
import './project-cartridge.css';

export const ProjectCartridge = ({projectIndex, name, image}) => {

    return (
        <div className="project-container" onClick={() => document.getElementById('dialog-rounded-' + projectIndex).showModal()}>
            <h4 className='game-title' >{name}</h4>
            <img alt="gameImage" className='game-image' src={image}/>
        </div>
     );
}

export default ProjectCartridge;