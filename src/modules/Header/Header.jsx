import Logo from "../../UI/Logo/Logo";
import HeaderContacts from "../../components/HeaderContacts/HeaderContacts";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";
import cl from './Header.module.css';

const Header = () => {

    return (
        <header className={cl.header}>
            <div className={cl.check}>
                <Logo />
            </div>
            <div className={cl.container_path}>
                <HeaderLinks />
                <HeaderContacts />
            </div>
        </header>

    );
};

export default Header;