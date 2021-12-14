import React from 'react';
import './project-cartridge.css';

import cartridge from '../../data/images/snes-cartridge.png';

export const ProjectCartridge = (props) => {
    return (
        <div className="projectContainer">
            <h3 className="projectTitle">{props.name}</h3>
            <img alt="cartridge" src={cartridge}/>
        </div>
     );
}

export default ProjectCartridge;