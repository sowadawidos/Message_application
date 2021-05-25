import React from "react"
import {Button} from "./Button";

export const HeaderStartPage = ({signIn}) => {
    return (
        <header className="app__header">
            <div className="container">
                <div className="logo">
                    <h1 className="logo-title">
                        <strong>Super</strong>
                        <span>Message app</span>
                    </h1>
                </div>
                <nav className="app__header-nav">
                    <ul className="nav-list">
                        <li className="nav-list-text">
                            <Button onClick={signIn}>Sign In</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}