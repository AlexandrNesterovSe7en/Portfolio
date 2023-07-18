import cl from './LinkContact.module.css';

const LinkContact = ({ src }) => {
    console.log(src)
    return (
        <img src={src} className={cl.icon} alt='icon'/>
    );
};

export default LinkContact;