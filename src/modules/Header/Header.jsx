import Logo from "../../UI/Logo/Logo";
import HeaderContacts from "../../components/HeaderContacts/HeaderContacts";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";
import cl from './Header.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css';
import useIsBurger from "../../Hooks/useChangeIsBurger";
import ButtonOpenMenu from "../../components/ButtonOpenMenu/ButtonOpenMenu";
import { useRef } from "react";


const Header = () => {
    const isBurger = useIsBurger(1000);
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

    function handler () {
        if (document.documentElement.dataset.theme !== 'dark') {
            document.documentElement.dataset.theme = 'dark'
        } else {
            document.documentElement.dataset.theme = ''
        }
    }

    return (
        <header className={`${cl.header} ${clAdaptive.header}`}>
            <div className={cl.check}>
                <Logo />
            </div>
            <button className={cl.check} onClick={handler}>dark | light</button>
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