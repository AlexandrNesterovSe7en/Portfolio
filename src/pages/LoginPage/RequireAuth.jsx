import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Context } from "../../index";

const RequireAuth = () => {
    const { auth } = useContext(Context);
    const user = auth?.currentUser;
    const location = useLocation();
    
    if(!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return (
           <Outlet />
    );
};

export default RequireAuth;