import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";
import {Chat} from "../chat/Chat";

export const MainPage = ({user, messageDB}) => {
    const {uid, displayName, photoURL} = user;

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('users').add({
                name: displayName,
                photo: photoURL,
                id: uid
            })
        }
    }, []);

    return (
        <>
            <section className="main__page">
                <div className="container">
                    <UserPageList user={user} messageDB={messageDB}/>
                    <Chat user={user} messageDB={messageDB}/>
                </div>
            </section>
        </>
    )
}