import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";


const HomeRoute = {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <h1>children</h1>
        }
    ]
}

export {HomeRoute}