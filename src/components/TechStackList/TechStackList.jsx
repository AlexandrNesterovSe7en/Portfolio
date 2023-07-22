import CssSvg from "../../UI/SVG/CssSVG/CssSvg";
import GitSVG from "../../UI/SVG/GitSVG/GitSVG";
import HtmlSVG from "../../UI/SVG/HtmlSVG/HtmlSVG";
import JsSVG from "../../UI/SVG/JsSVG/JsSVG";
import ReactSVG from "../../UI/SVG/ReactSVG/ReactSVG";
import SassSVG from "../../UI/SVG/SassSVG/SassSVG";
import VScodeSVG from "../../UI/SVG/VScodeSVG/VScodeSVG";
import GitHubSVG from '../../UI/SVG/GitHubSVG/GitHubSVG';

import cl from './TechStackList.module.css';
import clAdaptive from '../../adaptiveCSS/HomePage/HomePage.module.css'

const TechStackList = () => {
    return (
        <div className={`${cl.containerListTech} ${clAdaptive.containerListTech__adaptive}`}>
            <HtmlSVG />
            <CssSvg />
            <JsSVG />
            <ReactSVG />
            <div className={`${cl.break} ${clAdaptive.break_TechStackList__adaptive}`}></div>
            <SassSVG />
            <GitSVG />
            <VScodeSVG />
            <GitHubSVG className={cl.gitHub}/>
        </div>
    );
};

export default TechStackList;