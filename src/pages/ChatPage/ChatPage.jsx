import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import cl from "./ChatPage.module.css";
import { Timestamp, addDoc, arrayRemove, arrayUnion, collection, deleteDoc, deleteField, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";

const ChatPage = () => {
    const { db, auth: { currentUser: user } } = useContext(Context);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createAt'))
        const unsub = onSnapshot(q, (messages) => {
            const dbMessages = [];
            messages.forEach(message => {
                dbMessages.push(message.data())
            })

            setMessages(dbMessages)
            window.scrollTo(0, document.body.scrollHeight)
        })
        return () => unsub();
    }, [])
    
    function sendMessage(e) {
        e.preventDefault()

        if (value.trim().replace(/\n/g, '').length > 0) {
            const docRef = doc(collection(db, 'messages'));
            setDoc(docRef, {
                createAt: serverTimestamp(),
                photoURL: user.photoURL,
                uid: user.uid,
                text: String(value),
                id: docRef.id,
                name: user.displayName
            })
        }
        setValue('')
    }

    return (
        <div className={cl.container}>
            <div className={cl.chatWindow}>
                {messages.map(message =>
                    <div className={user.uid === message.uid ? cl.currentUser : cl.ownerUser} key={message.id}>
                        <div className={cl.userInfo}>
                            <img className={cl.img} src={message.photoURL} alt="..." />
                            <div className={cl.userName}>{message.name}</div>
                        </div>
                        <div className={cl.text}>{message.text}</div>
                    </div>)}
            </div>
            <div className={cl.textArea}>
                <input className={cl.area} value={value} onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e) : undefined} onChange={(e) => setValue(e.target.value)}></input>
                <button className={cl.button} onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;