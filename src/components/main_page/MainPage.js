import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import {UserPageList} from "../user_list/UserPageList";

export const MainPage = ({user}) => {

    return (
        <>
            <section className="main__page">
                <div className="container">
                    <UserPageList/>
                </div>
            </section>
        </>
    )
}