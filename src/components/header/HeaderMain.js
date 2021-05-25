import React from "react"
import {Button} from "./Button";

export const HeaderMain = ({toggleClass, active, user, signOut}) => {
    return (
        <header className="app__header">
            <div className="container">
                <button onClick={toggleClass} className={active ? "hamburger show" : "hamburger"}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <div className="logo">
                    <h1 className="logo-title">
                        <strong>Super</strong>
                        <span>Message app</span>
                    </h1>
                </div>
                <nav className="app__header-nav">
                    <ul className="nav-list">
                        <li className="nav-list-text">
                            <Button onClick={signOut}>Sign Out</Button>
                        </li>
                        <li className="nav-list-text">
                            <a href=""><img src={user.photoURL} alt="avatar"/></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}