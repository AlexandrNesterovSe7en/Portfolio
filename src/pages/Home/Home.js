import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <header>
                HEADER
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                FOOTER
            </footer>
        </>
    );
};

export default Home;