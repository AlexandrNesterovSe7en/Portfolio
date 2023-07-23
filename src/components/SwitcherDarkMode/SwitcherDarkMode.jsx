import { useEffect, useRef } from "react";
import MoonSVG from "../../UI/SVG/SwitcherDarkMode/MoonSVG/MoonSVG";
import SunSVG from "../../UI/SVG/SwitcherDarkMode/SunSVG/SunSVG";
import cl from './SwitcherDarkMode.module.css';

const SwitcherDarkMode = () => {
    const switchMode = useRef(null);


    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.dataset.theme = 'dark';
            switchMode.current.classList.add(cl.active);
        } else {
            document.documentElement.dataset.theme = 'light';
            switchMode.current.classList.remove(cl.active);
        }
    }, [])

    function handler() {
        if (document.documentElement.dataset.theme !== 'dark') {
            document.documentElement.dataset.theme = 'dark';
            localStorage.setItem('theme', 'dark')
            switchMode.current.classList.add(cl.active);
        } else {
            document.documentElement.dataset.theme = '';
            localStorage.removeItem('theme')
            switchMode.current.classList.remove(cl.active);
        }
    }

    return (
        <button onClick={handler} className={`${cl.switcherDarkMode}`} ref={switchMode}>
            <SunSVG />
            <MoonSVG />
        </button>
    );
};

export default SwitcherDarkMode;