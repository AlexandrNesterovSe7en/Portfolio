import TextHeader from "../../UI/TextHeader/TextHeader";
import cl from './UI/TextLinerGradient.module.css';
import classes from './GreetingsContent.module.css';
import Avatar from "../../UI/Avatar/Avatar";

const GreetingsContent = () => {
    return (
        <div className={classes.containerWrapper}>
            <TextHeader>Hi 👋,<br />
                My name is<br />
                <span className={cl.linerGradient}>Nesterov</span><br />
                I am Frontend Developer
            </TextHeader>
            <Avatar />
        </div>
    );
};

export default GreetingsContent;