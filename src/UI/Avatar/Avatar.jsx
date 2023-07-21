import avatar from './avatar.jpg';
import cl from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={cl.containerWrapper_avatar}>
            <img src={avatar} alt="Avatar" className={cl.avatar} />
        </div>
    );
};

export default Avatar;