import { Navigate, useLocation } from "react-router-dom";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';
import { useContext, useState } from "react";
import { Context } from "../../index";




const LoginPage = () => {
    const { auth } = useContext(Context);
    let [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user);
        } else{
            setUser(null);
        }
    })
    
    
    
    const login = async () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider).then((res) => {setUser(res)})
    }

    const logout = () => {
        signOut(auth)
    }

    
    const check = () => {
        console.log(auth)
    }

    if (user) {
        return <Navigate to='/chat' />
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh', fontSize: '40px'}}>
            <button style={{color: 'yellow'}} onClick={login}>LOGIN</button>
            <br />
            <br />
            <button style={{color: 'yellow'}} onClick={logout}>LOGOUT</button>
            <br />
            <br />
            <button style={{color: 'yellow'}} onClick={check}>CHECK</button>
        </div>
    )
};

export default LoginPage;