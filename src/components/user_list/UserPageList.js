import React, {useState, useEffect} from "react";
import "./UserPageList.scss";
import {Chat} from "../chat/Chat";
import {UserSearch} from "./UserSearch";
import {UserMessages} from "./UserMessages";

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
                <UserSearch users={users} user={user} getUser={getUser}/>
                <UserMessages users={users} user={user} getChatID={getChatID} messages={messages}/>
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