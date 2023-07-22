import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TechStackHeader from "../../components/TechStackHeader/TechStackHeader";
import ProjectCardsInfo from "../../constants/ProjectCardsInfo/ProjectCardsInfo";

import cl from './Projects.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css'

const Projects = () => {
    return (
        <div className={`${cl.containerWrapper} ${clAdaptive.containerWrapper_Projects__adaptiev}`}>
            <TechStackHeader HeaderText={{ h1: 'Projects', h2: 'Things I’ve built so far' }} />
            <div className={`${cl.containerProjectsList} ${clAdaptive.containerProjectsList_adaptive}`}>
                {ProjectCardsInfo.map((item, index) => {
                    if (index > 5) {
                        return false;
                    }
                    return <ProjectCard key={item.key} ContentCard={item} />
                })}
            </div>
        </div>
    );
};

export default Projects;