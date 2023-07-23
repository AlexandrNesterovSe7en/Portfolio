import Logo from "../../UI/Logo/Logo";
import HeaderContacts from "../../components/HeaderContacts/HeaderContacts";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";
import cl from './Header.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css';
import useIsBurger from "../../Hooks/useChangeIsBurger";
import ButtonOpenMenu from "../../components/ButtonOpenMenu/ButtonOpenMenu";
import { useRef } from "react";
import SwitcherDarkMode from "../../components/SwitcherDarkMode/SwitcherDarkMode";


const Header = () => {
    const isBurger = useIsBurger(1170);
    const openMenu = useRef(null);

    function onClickToggleMenu(e) {
        if (e.target.classList.contains('Menu')) {
            return
        }
        const curr = openMenu.current;
        curr.classList.toggle(cl.active)
        
        if(curr.classList.contains(cl.active)) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }
    }

    return (
        <header className={`${cl.header} ${clAdaptive.header}`}>
            <div className={cl.check}>
                <Logo />
            </div>
            <SwitcherDarkMode />
            {
                isBurger
                    ?
                    <>
                        <ButtonOpenMenu onClick={onClickToggleMenu} />
                        <div onClick={onClickToggleMenu} className={`${cl.container_path__burger_content} Menu`} ref={openMenu}>
                            <ButtonOpenMenu className={cl.closeMenu}/>
                            <HeaderLinks className={`${cl.burger_links} Menu`} />
                            <HeaderContacts />
                        </div>
                    </>
                    :
                    <div className={cl.container_path}>
                        <HeaderLinks />
                        <HeaderContacts />
                    </div>
            }
        </header>

    );
};

export default Header;