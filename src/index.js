import ReactDOM from 'react-dom/client';
import App from './App';
import './styleNone.css';
import './styleFonts.css';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createContext } from 'react';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJgwaIuj48uFuiOE78PhfvOsKVtoFDBFM",
    authDomain: "chat-react-b6613.firebaseapp.com",
    projectId: "chat-react-b6613",
    storageBucket: "chat-react-b6613.appspot.com",
    messagingSenderId: "745963963894",
    appId: "1:745963963894:web:e1e5894946e7538f71b3d7",
    measurementId: "G-2WTZMQMZ4W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export const Context = createContext(null);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{ auth, db }}>
        <App />
    </Context.Provider>
);

