import Header from "../../modules/Header/Header";
import cl from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={cl.container_wrapper}>
            <Header />
            <h1>
                Error Page
            </h1>
        </div>
    );
};

export default ErrorPage;