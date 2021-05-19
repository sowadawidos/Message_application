import React, {useState, useEffect} from "react";
import "./UserPageList.scss";
import logo from "../../images/search.svg";
import {Chat} from "../chat/Chat";

export const UserPageList = ({user , messageDB}) => {

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

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

    const getUser = (chatUser) => {
        if (messageDB) {
                    messageDB.collection('messages').add({
                        userSecondID: user.uid,
                        userFirstID: chatUser.uid
                    })
                }
    }
    console.log(messages);
    return (
        <>
            <div className="user__page-list">
                <div className="users__list">
                    <h1>Users</h1>
                    <ul>
                        <li className="user-search"><a href=""><img src={logo}/></a></li>
                        {
                            users.map(user => {
                                return (
                                    <>
                                        <li key={user.id} className="user-logo">
                                            {/*<a href=""><img src={user.photo}/></a>*/}
                                            <button onClick={() => getUser(user)}><img src={user.photo}/></button>
                                            {/*<button onClick={getUser(user)}><img src={user.photo}/></button>*/}
                                        </li>
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
                            const image = users.map(el => el.uid === chat.userFirstID ? el.photo : null )
                            const name = users.map(el => el.uid === chat.userFirstID ? el.name : null)

                            return (
                                <>
                                    <li key={chat.id}>
                                        <a href="" className="users">
                                            <img src={`${image}`}/>
                                            <div className="user-description">
                                                <h1 className="user-desc-unread">{name}</h1>
                                                <p>wiadomość cos tam</p>
                                            </div>
                                            <div className="user-date">
                                                <p>12:00</p>
                                                <p>today</p>
                                            </div>
                                        </a>
                                    </li>
                                </>

                            )
                        })
                    }
                </ul>
            </div>
            <Chat user={user} messageDB={messageDB} messages={messages}/>
        </>
    )
}