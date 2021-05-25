import React from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";

export const MainPage = ({user, messageDB, active}) => {

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