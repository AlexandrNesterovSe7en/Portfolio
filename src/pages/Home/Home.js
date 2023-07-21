import { Outlet } from "react-router-dom";
import Header from "../../modules/Header/Header";
import cl from './Home.module.css';
import Footer from "../../modules/Footer/Footer";

const Home = () => {
    return (
        <div className={cl.container_wrapper}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Home;