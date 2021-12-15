import React from 'react';
import './project-cartridge.css';

export const ProjectCartridge = (props) => {

    return (
        <div className="project-container">
            <h4 className='game-title' >{props.name}</h4>
            <img alt="image" className='game-image' src={props.image}/>
        </div>
     );
}

export default ProjectCartridge;