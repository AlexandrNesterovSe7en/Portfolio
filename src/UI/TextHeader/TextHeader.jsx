import cl from './TextHeader.module.css';

const TextHeader = ({ children, className, ...props }) => {
    return (
        <h2 {...props} className={`${className} ${cl.text}`}>
            {children}
        </h2>
    );
};

export default TextHeader;