import { Outlet } from "react-router-dom";
import Header from "../../modules/Header/Header";
import cl from './Home.module.css';
import { useEffect, useState } from "react";

const Home = () => {
    let [check, setCheck] = useState(false);

    useEffect(() => {
        setCheck(true)

        return () => {
            setCheck(false);
        }
    }, [])
    if (!check) {
        return <h1>prepare</h1>
    }
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