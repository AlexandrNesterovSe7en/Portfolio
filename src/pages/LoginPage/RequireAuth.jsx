import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../../index";
import cl from './RequireAuth.module.css';
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    
    if(!user) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={cl.container}>
            <div className={cl.header}>
                {
                    user ? 
                    <button onClick={() => auth.signOut()} className={cl.button}>Выйти</button>
                    :
                    <button className={cl.button}>Войти</button>
                }
            </div>
            <Outlet />
        </div>
    );
};

export default RequireAuth;