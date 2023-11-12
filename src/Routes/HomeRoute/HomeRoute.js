import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import HomeContentPage from "../../pages/HomeContentPage/HomeContentPage";


const HomeRoute = {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <HomeContentPage />,
        }
    ]
}

export { HomeRoute }