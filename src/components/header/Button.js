import React from "react";
import "./Button.scss";

export const Button = ({onClick = null, children = null}) => {
    return (
        <>
            <button className="sign__button" onClick={onClick}>{children}</button>
        </>
    )
}