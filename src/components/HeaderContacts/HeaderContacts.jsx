import GitHubSVG from '../../UI/SVG/GitHubSVG/GitHubSVG';
import PenIoSVG from '../../UI/SVG/PenIoSVG/PenIoSVG';
import VkSVG from '../../UI/SVG/VkSVG/VkSVG';
import cl from './HeaderContacts.module.css';

const HeaderContacts = () => {
    return (
        <div className={cl.link_contacts}>
            <a href="https://vk.com/raaruuu" target='_blank' className={cl.link_SVG}>
                <VkSVG />
            </a>

            <a href="https://github.com/zxcPAPASHAzxc" target='_blank' className={cl.link_SVG}>
                <GitHubSVG />
            </a>
            
            <a href="https://codepen.io/SE77EN" target='_blank' className={cl.link_SVG}>
                <PenIoSVG />
            </a>
        </div>
    );
};

export default HeaderContacts;