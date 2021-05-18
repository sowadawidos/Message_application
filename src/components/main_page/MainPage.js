import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";
import {Chat} from "../chat/Chat";

export const MainPage = ({user, messageDB}) => {

    return (
        <>
            <section className="main__page">
                <div className="container">
                    <UserPageList/>
                    <Chat user={user} messageDB={messageDB}/>
                </div>
            </section>
        </>
    )
}