import React from "react"
import {Message} from "./Message";


export const MessageList = ({message, uid}) => {
    return (
        message.map(message => {
            return (
                <Message message={message} uid={uid}/>
            )
        })
    )
}