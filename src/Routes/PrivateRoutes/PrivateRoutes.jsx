import ChatPage from "../../pages/ChatPage/ChatPage";
import RequireAuth from "../../pages/LoginPage/RequireAuth";

const PrivateRoutes = {
    path: '/chat',

    element: <RequireAuth/>,

    children: [
        {
            path: '/chat',

            element: <ChatPage />,
        },
    ]
}

export { PrivateRoutes };