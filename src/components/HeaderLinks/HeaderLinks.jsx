import MyLink from "../../UI/Link/MyLink";
import cl from './HeaderLinks.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css';

const HeaderLink = ({className}) => {
    return (
        <div className={`${cl.links} ${className} ${clAdaptive.containerLinks_HeaderLink__adaptive}`}>
            <MyLink to='/'>Home</MyLink>
            <MyLink to='/about'>About</MyLink>
            <MyLink to='/tech-stack'>Tech Stack</MyLink>
            <MyLink to='/project'>Projects</MyLink>
            <MyLink to='/contact'>Contanct</MyLink>
        </div>
    );
};

export default HeaderLink;