import React, {useState, useEffect} from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";

export const MainPage = ({user, messageDB, auth, users}) => {

    // const {uid, displayName, photoURL} = user;
    //
    // useEffect(() => {
    //     if (messageDB) {
    //         messageDB.collection('users').add({
    //             name: displayName,
    //             photo: photoURL,
    //             uid: uid
    //         })
    //     }
    // }, [auth.currentUser]);

    return (
        <>
            <section className="main__page">
                <div className="container">
                    <UserPageList user={user} messageDB={messageDB} users={users}/>
                </div>
            </section>
        </>
    )
}