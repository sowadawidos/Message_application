import React, {useState, useEffect} from "react";
import "./UserPageList.scss";
import logo from "../../images/search.svg";

export const UserPageList = () => {

    return (
        <>
            <div className="user__page-list">
                <div className="users__list">
                    <h1>Users</h1>
                    <ul>
                        <li className="user-search"><a href=""><img src={logo}/></a></li>
                        <li className="user-logo">
                            <a href=""><img src=""/></a>
                        </li>
                    </ul>
                </div>
                <ul className="user-list">
                    <h1 className="user-list-title">Messages</h1>
                    <li>
                        <a href="" className="users">
                            <img src="man_photo1.jpeg"/>
                            <div className="user-description">
                                <h1 className="user-desc-unread">Dawid Sowiński</h1>
                                <p>wiadomość cos tam</p>
                            </div>
                            <div className="user-date">
                                <p>12:00</p>
                                <p>today</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="users">
                            <img src="man_photo2.jpeg"/>
                            <div className="user-description">
                                <h1>Jan Kowalski</h1>
                                <p>wiadomość</p>
                            </div>
                            <div className="user-date">
                                <p>11:00</p>
                                <p>today</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="users">
                            <img src="man_photo3.jpeg"/>
                            <div className="user-description">
                                <h1>Aleksander Czesław</h1>
                                <p>wiadomość</p>
                            </div>
                            <div className="user-date">
                                <p>8:00</p>
                                <p>today</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="users">
                            <img src="girl_photo3.jpeg"/>
                            <div className="user-description">
                                <h1>Ala Lala</h1>
                                <p>wiadomość</p>
                            </div>
                            <div className="user-date">
                                <p>12:00</p>
                                <p>yesterday</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}