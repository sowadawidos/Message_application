import React, {useState, useEffect} from "react";
import "./UserPageList.scss";
import logo from "../../images/search.svg";
import {Chat} from "../chat/Chat";

export const UserPageList = ({user, messageDB, active}) => {

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messageID, setMessageID] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('users').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setUsers(data);
            })
            messageDB.collection('messages').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setMessages(data);
            })
        }
    }, [messageDB]);

    const getUser = chatUser => {
        if (messages.length > 0) {
            messages.forEach(message => {
                if (message.userFirstID === chatUser.uid || message.userSecondID === user.uid) {
                    messageDB.collection('messages').doc(`${user.uid}${chatUser.uid}`).set({
                        userSecondID: user.uid,
                        userFirstID: chatUser.uid
                    })
                }
            })
        } else {
            messageDB.collection('messages').doc(`${user.uid}${chatUser.uid}`).set({
                userSecondID: user.uid,
                userFirstID: chatUser.uid
            })
        }
    }

    const getChatID = (chatID, event, checkedUser, checkedUser2) => {
        event.preventDefault();
        setMessageID(chatID);

        if (user.uid === checkedUser2.uid) {
            setImage(checkedUser.photo);
            setName(checkedUser.name);
        } else {
            setImage(checkedUser2.photo);
            setName(checkedUser2.name);
        }

    }


    return (
        <>
            <div className={active ? `user__page-list show` : `user__page-list`}>
                <div className="users__list">
                    <h1>Users</h1>
                    <ul>
                        <li className="user-search"><a href="#"><img src={logo} alt="search"/></a></li>
                        {
                            users.map(logged_user => {
                                return (
                                    <>
                                        {
                                            logged_user.uid !== user.uid ?
                                                <li key={logged_user.id} className="user-logo">
                                                    <button onClick={() => getUser(logged_user)}><img
                                                        src={logged_user.photo} alt="photo"/>
                                                    </button>
                                                    <p className="user-logo-name">{logged_user.name}</p>
                                                </li>
                                                :
                                                null
                                        }

                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
                <ul className="user-list">
                    <h1 className="user-list-title">Messages</h1>
                    {
                        messages.map(chat => {
                            const checkedUser = users.filter(user => user.uid === chat.userFirstID);
                            const checkedUser2 = users.filter(user => user.uid === chat.userSecondID);

                            return (
                                <>
                                    {
                                        chat.userFirstID === user.uid || chat.userSecondID === user.uid ?
                                            <li key={chat.id}>
                                                <a onClick={event => getChatID(chat.id, event, checkedUser[0], checkedUser2[0])}
                                                   href=""
                                                   className="users">
                                                    <img src={
                                                        user.uid === chat.userFirstID ? checkedUser2[0].photo : checkedUser[0].photo
                                                    } alt="avatar"/>
                                                    <div className="user-description">
                                                        <h1 className="user-desc-unread">
                                                            {
                                                                user.uid === chat.userFirstID ? checkedUser2[0].name : checkedUser[0].name
                                                            }
                                                        </h1>
                                                    </div>
                                                </a>
                                            </li>
                                            :
                                            null
                                    }

                                </>

                            )
                        })
                    }
                </ul>
            </div>
            {
                messageID ?
                    <Chat user={user}
                          messageDB={messageDB}
                          messageID={messageID}
                          image={image}
                          name={name}
                          active={active}/>
                    :
                    null
            }
        </>
    )
}