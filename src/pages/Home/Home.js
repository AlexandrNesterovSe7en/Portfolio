import { Outlet } from "react-router-dom";
import Header from "../../modules/Header/Header";
import cl from './Home.module.css';

const Home = () => {
    return (
        <div className={cl.container_wrapper}>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                FOOTER
            </footer>
        </div>
    );
};

export default Home;