import React from "react";
import moment from "moment";

export const Message = ({message, uid}) => {
    return (
            uid === message.uid ?
            <div key={message.id} className={`messages__left`}>
                <div className="message">
                    <p className="main__message">{message.text}</p>
                    <p>
                        {
                            message.date !== null && `${moment.unix(message.date.seconds).fromNow()}`
                        }
                    </p>
                </div>
                <img src={message.photoURL} alt={"avatar"}/>
            </div>
            :
            <div key={message.id} className={`messages__right`}>
                <img src={message.photoURL} alt={"avatar"}/>
                <div className="message">
                    <p className="main__message">{message.text}</p>
                    <p>
                        {
                            message.date !== null && `${moment.unix(message.date.seconds).fromNow()}`
                        }
                    </p>
                </div>
            </div>
    )
}