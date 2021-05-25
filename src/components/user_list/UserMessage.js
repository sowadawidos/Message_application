import React from "react"

export const UserMessage = ({chat, user, getChatID, checkedUser, checkedUser2}) => {
    return (
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
    )
}