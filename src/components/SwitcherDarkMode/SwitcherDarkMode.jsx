import { useRef } from "react";
import MoonSVG from "../../UI/SVG/SwitcherDarkMode/MoonSVG/MoonSVG";
import SunSVG from "../../UI/SVG/SwitcherDarkMode/SunSVG/SunSVG";
import cl from './SwitcherDarkMode.module.css';

const SwitcherDarkMode = () => {
    const switchMode = useRef(null);

    function handler () {
        if (document.documentElement.dataset.theme !== 'dark') {
            document.documentElement.dataset.theme = 'dark';
            switchMode.current.classList.add(cl.active);
        } else {
            document.documentElement.dataset.theme = '';
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