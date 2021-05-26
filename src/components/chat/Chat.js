import React, {useState, useEffect} from "react";
import "./Chat.scss";
import firebase from "firebase/app";
import Messages from "react-scrollable-feed";
import {MessageList} from "./MessageList";
import {CurrentChatTarget} from "./CurrentChatTarget";
import send from "../../images/send.svg";

export const Chat = ({user, messageDB, messageID, image, name, active}) => {

    const [message, setMessage] = useState([]);
    const [newMessages, setNewMessages] = useState('');

    const {uid, displayName, photoURL} = user;

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('messages').doc(`${messageID}`).collection('message').orderBy('date').limit(30).onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setMessage(data);
            })
        }

    }, [messageID, messageDB]);

    const onChange = e => {
        setNewMessages(e.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();

        if (messageDB && newMessages.length > 0) {
            messageDB.collection('messages').doc(`${messageID}`).collection('message').add({
                text: newMessages,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL
            })
        }
        setNewMessages("");
    }


    return (
        <>
            <div className={active ? `chat show` : `chat`}>
                <CurrentChatTarget image={image} name={name}/>
                <Messages className="messages">
                    <MessageList message={message} uid={uid}/>
                </Messages>
                <form onSubmit={onSubmit} className="send__messages">
                    <input onChange={onChange} type="text" value={newMessages} placeholder="Type Your message..."/>
                    <button><img src={send} alt="send button"/></button>
                </form>
            </div>
        </>
    )
}
