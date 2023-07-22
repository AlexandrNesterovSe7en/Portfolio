import cl from './ButtonOpen.module.css';

const ButtonOpen = ({ onClick, className, ...props }) => {
    return (
        <button onClick={onClick} {...props} className={`${cl.button} ${className} buttonMenu`}>
            <div></div>
        </button>
    );
};

export default ButtonOpen;