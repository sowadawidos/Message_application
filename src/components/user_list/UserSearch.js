import React from "react";
import {Users} from "./Users";


export const UserSearch = ({users, user, getUser}) => {
    return (
        <div className="users__list">
            <h1>Users</h1>
            <ul>
                {
                    users.map(logged_user => <Users logged_user={logged_user} user={user} getUser={getUser}/>)
                }
            </ul>
        </div>
    )
}