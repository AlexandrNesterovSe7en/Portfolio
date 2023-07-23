import Header from "../../modules/Header/Header";
import cl from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className={cl.container_wrapper}>
                <h1>
                    Error Page: 404
                    <br />
                    ведутся работы, скоро страница будет доступна
                </h1>
            </div>
        </>
    );
};

export default ErrorPage;