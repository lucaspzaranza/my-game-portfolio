import React from 'react';
import './project-cartridge.css';

export const ProjectCartridge = (props) => {

    const mouseEntered = () => {
        console.log('mouse entered');
    };

    return (
        // <div className="projectContainer">
        //     <span className="projectTitle"><strong>{props.name}</strong></span>
        //     <div className="cartridge-container">
        //         <img alt="image" className="gameImage" src={props.image} 
        //             onMouseEnter={mouseEntered}/>
        //     </div>
        // </div>
        
        <tr className="projectContainer">
            <span className="projectTitle"><strong>{props.name}</strong></span>
            <div className="cartridge-container">
                <img alt="image" className="gameImage" src={props.image} 
                    onMouseEnter={mouseEntered}/>
            </div>
        </tr>
     );
}

export default ProjectCartridge;