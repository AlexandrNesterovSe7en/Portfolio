import Logo from '../../UI/Logo/Logo';
import TextP from '../../UI/TextP/TextP';
import HeaderContacts from '../../components/HeaderContacts/HeaderContacts';
import HeaderLink from '../../components/HeaderLinks/HeaderLinks';
import cl from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container_contacts}>
                <Logo className={cl.logo} fill={true} />
                <div className={cl.container_contacts__plug}></div>
                <a href='tel:+79500533083'>+7 (950) 053 30-83</a>
                <a href='mailto:pudj.nesterov2004@mail.ru'>pudj.nesterov2004@mail.ru</a>
                <HeaderContacts />
            </div>
            <hr className={cl.hr}/>
            <div className={cl.container_Links}>
                <HeaderLink />
                <TextP>Built by <span>Nesterov</span> with <span>Love</span> & <span>Coffe</span></TextP>
            </div>
        </footer>
    );
};

export default Footer;