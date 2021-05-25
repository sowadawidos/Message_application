import React from "react"
import {UserMessage} from "./UserMessage";

export const UserMessages = ({users, user, getChatID, messages}) => {
    return (
        <ul className="user-list">
            <h1 className="user-list-title">Messages</h1>
            {
                messages.map(chat => {
                    const checkedUser = users.filter(user => user.uid === chat.userFirstID);
                    const checkedUser2 = users.filter(user => user.uid === chat.userSecondID);
                    return (
                        <UserMessage chat={chat} user={user} getChatID={getChatID} checkedUser={checkedUser} checkedUser2={checkedUser2}/>
                        )
                })
            }
        </ul>
    )
}