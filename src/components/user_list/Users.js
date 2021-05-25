import React from "react"

export const Users = ({logged_user, user, getUser}) => {
    return (
        logged_user.uid !== user.uid ?
            <li key={logged_user.id} className="user-logo">
                <button onClick={() => getUser(logged_user)}><img
                    src={logged_user.photo} alt="photo"/>
                </button>
                <p className="user-logo-name">{logged_user.name}</p>
            </li>
            :
            null
    )
}