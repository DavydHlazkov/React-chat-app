import React from "react";
import Chat from "../Chat/Chat";
import "./chatList.css"

function ChatList ({users, messages}){

    return (
        <div className="chatList-main">
            <h1>Chats</h1>
            {users.map((user, id) =>{
                const userMessages = messages.filter (mes => mes.chatId === user.id)
                return <Chat key={id} user = {user} messages = {userMessages} />
            })}
        </div>
    )
}

export default ChatList