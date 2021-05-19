import React, {useState, useEffect} from "react";
import "./Chat.scss";
import send from "../../images/send.svg";
import {formatRelative} from 'date-fns';
import firebase from "firebase/app";

export const Chat = ({user, messageDB, messages}) => {

    const [message, setMessage] = useState([]);
    const [newMessages, setNewMessages] = useState('');

    const {uid, displayName, photoURL} = user;

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('messages').doc('ax7NiQ3PCjSi7iUNjWiR').collection('message').orderBy('date').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setMessage(data);
            })
        }
    }, [messageDB]);

    const onChange = e => {
        setNewMessages(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        if (messageDB) {
            messageDB.collection('messages').doc('ax7NiQ3PCjSi7iUNjWiR').collection('message').add({
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
            <div className="chat">
                <div className="chat__users">
                    <img src="man_photo1.jpeg"/>
                    <p>Dawid Sowiński</p>
                </div>
                <div className="messages">
                    {
                        message.map(message => {
                            return (
                                <>
                                    {
                                        uid === message.uid ?
                                            <div key={message.id} className={`messages__left`}>
                                                <div className="message">
                                                    <p className="main__message">{message.text}</p>
                                                    {/*<p>{formatRelative(new Date(message.date.seconds * 1000), new Date())}</p>*/}
                                                </div>
                                                <img src={message.photoURL} alt={"avatar"}/>
                                            </div>
                                            :
                                            <div key={message.id} className={`messages__right`}>
                                                <img src={message.photoURL} alt={"avatar"}/>
                                                <div className="message">
                                                    <p className="main__message">{message.text}</p>
                                                    {/*<p>{formatRelative(new Date(message.date.seconds * 1000), new Date())}</p>*/}
                                                </div>
                                            </div>
                                    }
                                </>
                            )
                        })
                    }
                </div>
                <form onSubmit={onSubmit} className="send__messages">
                    <input onChange={onChange} type="text" value={newMessages} placeholder="Type Your message..."/>
                    <button><img src={send}/></button>
                </form>
            </div>
        </>
    )
}