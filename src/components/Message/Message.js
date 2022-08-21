import React from "react";
import "./message.css"
import User from "../User/User";


function Message({message, userImage}){
    const timeOptions = {
        month : "numeric",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }

    const time = new Date(message.time).toLocaleString('en-US', timeOptions)

    return(
        <div className="main-message">
            <div className="name-mes">
                {!message.myMessage?<User imgUrl={userImage} />: null }
                <div className={!message.myMessage? "message" : "myMessage"}>{message.text}</div>
            </div>
            <p id={!message.myMessage? "p-message": "p-myMessage"} >{time}</p>
        </div>
    )
}

export default Message