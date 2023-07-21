import TechStackHeader from "../../components/TechStackHeader/TechStackHeader";
import TechStackList from "../../components/TechStackList/TechStackList";
import clTechStack from './MyTechStack.module.css';

const MyTechStack = () => {
    return (
        <div className={clTechStack.containerWrapper}>
            <TechStackHeader HeaderText={{h1: 'My Tech Stack', h2: 'Technologies I’ve been working with recently'}}/>
            <TechStackList />
        </div>
    );
};

export default MyTechStack;