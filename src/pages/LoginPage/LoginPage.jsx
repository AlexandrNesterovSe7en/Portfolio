import { Navigate } from "react-router-dom";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';
import { useContext, useState } from "react";
import { Context } from "../../index";
import { useAuthState } from 'react-firebase-hooks/auth';
import cl from './LoginPage.module.css'



const LoginPage = () => {
    const { auth } = useContext(Context);
    let [user, loading] = useAuthState(auth);


    const login = async () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const logout = () => {
        signOut(auth)
    }

    if (user) {
        return <Navigate to='/chat' />
    }

    return <div className={cl.container}>
        {
          loading ?
        <span className={cl.loader}></span>
        :
        <div className={cl.wrapper}>
            <button style={{ color: 'yellow' }} onClick={login}>LOGIN</button>
            <br />
            <br />
            <button style={{ color: 'yellow' }} onClick={logout}>LOGOUT</button>

        </div>   
        }
    </div>
   
};

export default LoginPage;