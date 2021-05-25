import React from "react"

export const CurrentChatTarget = ({image, name}) => {
    return (
        <div className="chat__users">
            <img src={image} alt="avatar"/>
            <p>{name}</p>
        </div>
    )
}