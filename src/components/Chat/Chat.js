import React, { useEffect, useState } from "react";
import "./chat.css"
import User from "../User/User";
import {Link} from "react-router-dom"

function Chat ({user, messages}){

    const timeOptions = {
        month: "short",
        day : "numeric",
        year: "numeric"
    }

    const [lastMessage, setLastMessage] = useState('no messages yet...')
    const [lastMessageTime, setLastMessageTime] = useState('')

    useEffect(()=>{
        const sortMessages = [...messages]
        sortMessages.sort((a,b)=> new Date(b.time) - new Date(a.time))

        if(sortMessages.length){
            setLastMessage(sortMessages[0].text)
            const date = new Date(sortMessages[0].time)
            setLastMessageTime(date.toLocaleString("en-US", timeOptions))
        }
        
    }, [messages])


    return (
        <Link to={'/' + user.id} style = {{textDecoration:'none', color:'inherit'}}>
        <div className="main-chat">
                <User imgUrl={user.image}/>
                <div className="name-last-mes">
                    <h4>{user.name}</h4>
                    <p>{lastMessage}</p>
                </div>
                <p id="last-mes-date">{lastMessageTime}</p>
        </div>
        </Link>
    )
}

export default Chat