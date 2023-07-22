import Logo from '../../UI/Logo/Logo';
import TextP from '../../UI/TextP/TextP';
import HeaderContacts from '../../components/HeaderContacts/HeaderContacts';
import HeaderLink from '../../components/HeaderLinks/HeaderLinks';
import cl from './Footer.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css';

const Footer = () => {
    return (
        <footer className={`${cl.footer} ${clAdaptive.footer__adaptive}`}>
            <div className={`${cl.container_contacts} ${clAdaptive.container_contacts__adaptive}`}>
                <Logo className={cl.logo} fill={true} />
                <div className={cl.container_contacts__plug}></div>
                <a href='tel:+79500533083'>+7 (950) 053 30-83</a>
                <a href='mailto:pudj.nesterov2004@mail.ru'>pudj.nesterov2004@mail.ru</a>
                <HeaderContacts />
            </div>
            <hr className={cl.hr}/>
            <div className={`${cl.container_Links} ${clAdaptive.container_Links__adaptive}`}>
                <HeaderLink className={`${clAdaptive.headerLink__adaptive} ${clAdaptive.headerLink__adaptive__footer}`}/>
                <TextP className={`${cl.authorBuilt} ${clAdaptive.authorBuilt__adaptive}`}>Built by <span>Nesterov</span> with <span>Love</span> & <span>Coffe</span></TextP>
            </div>
        </footer>
    );
};

export default Footer;