import ButtonOpen from "../../UI/Button/ButtonOpen/ButtonOpen";

const ButtonOpenMenu = ({onClick, ...props}) => {

    return (
        <ButtonOpen onClick={onClick} {...props}/>
    );
};

export default ButtonOpenMenu;