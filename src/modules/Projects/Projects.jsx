import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TechStackHeader from "../../components/TechStackHeader/TechStackHeader";
import ProjectCardsInfo from "../../constants/ProjectCardsInfo/ProjectCardsInfo";
import cl from './Projects.module.css';

const Projects = () => {
    return (
        <div className={cl.containerWrapper}>
            <TechStackHeader HeaderText={{ h1: 'Projects', h2: 'Things I’ve built so far' }} />
            <div className={cl.containerProjectsList}>
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