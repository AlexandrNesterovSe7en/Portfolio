import CssSvg from "../../UI/SVG/CssSVG/CssSvg";
import GitSVG from "../../UI/SVG/GitSVG/GitSVG";
import HtmlSVG from "../../UI/SVG/HtmlSVG/HtmlSVG";
import JsSVG from "../../UI/SVG/JsSVG/JsSVG";
import ReactSVG from "../../UI/SVG/ReactSVG/ReactSVG";
import SassSVG from "../../UI/SVG/SassSVG/SassSVG";
import VScodeSVG from "../../UI/SVG/VScodeSVG/VScodeSVG";
import GitHubSVG from '../../UI/SVG/GitHubSVG/GitHubSVG';

import cl from './TechStackList.module.css';

const TechStackList = () => {
    return (
        <div className={cl.containerListTech}>
            <HtmlSVG />
            <CssSvg />
            <JsSVG />
            <ReactSVG />
            <div className={cl.break}></div>
            <SassSVG />
            <GitSVG />
            <VScodeSVG />
            <GitHubSVG className={cl.gitHub}/>
        </div>
    );
};

export default TechStackList;