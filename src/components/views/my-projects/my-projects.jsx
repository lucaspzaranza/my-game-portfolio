import React, { useContext } from 'react';
import './my-projects.css'

import { myProjects, languages } from '../../../data/data';
import LanguageContext from '../../../contexts/LanguageContext';
import BackButton from '../../back-btn/back-btn';
import ProjectCartridge from '../../project-cartridge/project-cartridge';

export const MyProjects = () => {
    const {pt} = languages;
    const langContext = useContext(LanguageContext);
    const title = langContext[0] === pt ? myProjects.pt.title : myProjects.en.title;
    const projects = langContext[0] === pt ? myProjects.pt.projects : myProjects.en.projects;

    return (
        <div class="nes-container with-title is-centered">
            <p class="menu-container-title title">{title}</p>

            <div className="project-cartridges">
            {
                projects.map(project => (
                    <ProjectCartridge name={project}/>
                ))
            }
            </div>


            <BackButton/>
        </div>
    );
}

export default MyProjects;