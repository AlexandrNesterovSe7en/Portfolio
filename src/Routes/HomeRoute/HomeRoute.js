import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";


const HomeRoute = {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
}

export {HomeRoute}