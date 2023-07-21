import TextHeader from '../../UI/TextHeader/TextHeader';
import TextP from '../../UI/TextP/TextP';
import cl from './UI/textHeader.module.css';

const TechStackHeader = ({HeaderText}) => {
    return (
        <>
            <TextHeader className={cl.textHeader}>{HeaderText.h1}</TextHeader>
            <TextP className={cl.textHeader_under}>{HeaderText.h2}</TextP>
        </>
    );
};

export default TechStackHeader;