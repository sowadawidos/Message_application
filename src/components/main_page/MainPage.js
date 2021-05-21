import React from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";

export const MainPage = ({user, messageDB, users, active, checkUser}) => {

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
    // }, []);

    return (
        <>
            <section className="main__page">
                <div className="container">
                    <UserPageList user={user} messageDB={messageDB} active={active}/>
                </div>
            </section>
        </>
    )
}