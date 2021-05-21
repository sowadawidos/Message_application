import React, {useState, useEffect} from "react";
import "./Chat.scss";
import send from "../../images/send.svg";
import firebase from "firebase/app";

export const Chat = ({user, messageDB, messageID, image, name, active}) => {

    const [message, setMessage] = useState([]);
    const [newMessages, setNewMessages] = useState('');

    const {uid, displayName, photoURL} = user;

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('messages').doc(`${messageID}`).collection('message').orderBy('date').onSnapshot(querySnapshot => {
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

    const onSubmit = e => {
        e.preventDefault();

        if (messageDB) {
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
                <div className="chat__users">
                    <img src={image} alt="avatar"/>
                    <p>{name}</p>
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
                                                    <p>
                                                        {
                                                            `${new Date((message.date * 1000) - 62135638488000).toLocaleDateString()} ${new Date(message.date * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`
                                                        }
                                                    </p>
                                                </div>
                                                <img src={message.photoURL} alt={"avatar"}/>
                                            </div>
                                            :
                                            <div key={message.id} className={`messages__right`}>
                                                <img src={message.photoURL} alt={"avatar"}/>
                                                <div className="message">
                                                    <p className="main__message">{message.text}</p>
                                                    <p>
                                                        {
                                                            `${new Date((message.date * 1000) - 62135638488000).toLocaleDateString()} ${new Date(message.date * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`
                                                        }
                                                    </p>
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
                    <button><img src={send} alt="send button"/></button>
                </form>
            </div>
        </>
    )
}