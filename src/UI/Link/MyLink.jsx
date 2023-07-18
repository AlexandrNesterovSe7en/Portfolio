import { NavLink } from "react-router-dom";
import cl from './MyLink.module.css';

const MyLink = ({ children, to }) => {
    return (
        <NavLink className={({ isActive }) =>
            isActive ?
                `${cl.active} ${cl.link}`
                :
                `${cl.link}`}
            to={to}>

            {children}
            
        </NavLink>
    );
};

export default MyLink;