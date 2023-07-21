import GreetingsContent from "../../modules/GreetingsContent/GreetingsContent";
import MyTechStack from "../../modules/MyTechStack/MyTechStack";
import Projects from "../../modules/Projects/Projects";
import cl from './HomeContentPage.module.css';

const HomeContentPage = () => {
    return (
        <div className={cl.containerWrapper}>
            <GreetingsContent />
            <MyTechStack />
            <Projects />
        </div>
    );
};

export default HomeContentPage;