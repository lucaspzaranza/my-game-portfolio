import React from 'react';
import './project-cartridge.css';

export const ProjectCartridge = (props) => {

    return (
        <div className="projectContainer">
            <span className="projectTitle"><strong>{props.name}</strong></span>
            <div className="cartridge-container">
                <img alt="image" className="gameImage" src={props.image}/>
            </div>
        </div>
     );
}

export default ProjectCartridge;