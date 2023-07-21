import cl from './TextP.module.css';

const TextP = ({children, className, ...props}) => {
    return (
        <p className={`${cl.text} ${className}`} {...props}>{children}</p>
    );
};

export default TextP;