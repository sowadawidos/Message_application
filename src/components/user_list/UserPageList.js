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

    // checkUser(users);

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

    const getChatID = (chatID, event, image, name) => {
        event.preventDefault();
        setMessageID(chatID);
        setImage(image);
        setName(name);
    }


    return (
        <>
            <div className={active ? `user__page-list show` : `user__page-list`}>
                <div className="users__list">
                    <h1>Users</h1>
                    <ul>
                        <li className="user-search"><a href="#"><img src={logo}/></a></li>
                        {
                            users.map(users => {
                                return (
                                    <>
                                        {
                                            users.uid !== user.uid ?
                                                <li key={users.id} className="user-logo">
                                                    <button onClick={() => getUser(users)}><img src={users.photo}/>
                                                    </button>
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
                            // const image = users.map(el => el.uid.includes(chat.userFirstID) ? el.photo : null)
                            const name = users.map(el => el.uid.includes(chat.userFirstID) ? el.name : null)

                            return (
                                <>
                                    {
                                        chat.userFirstID === user.uid || chat.userSecondID === user.uid ?
                                            <li key={chat.id}>
                                                <a onClick={event => getChatID(chat.id, event, image, name)} href=""
                                                   className="users">
                                                    <img src={image} alt="avatar"/>
                                                    <div className="user-description">
                                                        <h1 className="user-desc-unread">{name}</h1>
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