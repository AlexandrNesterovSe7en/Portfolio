import MyLink from "../../UI/Link/MyLink";
import cl from './HeaderLinks.module.css';

const HeaderLink = () => {
    return (
        <div className={cl.links}>
            <MyLink to='/'>Home</MyLink>
            <MyLink to='/about'>About</MyLink>
            <MyLink to='/tech-stack'>Tech Stack</MyLink>
            <MyLink to='/project'>Projects</MyLink>
            <MyLink to='/contact'>Contanct</MyLink>
        </div>
    );
};

export default HeaderLink;