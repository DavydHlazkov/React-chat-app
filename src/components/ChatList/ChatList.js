import React from "react";
import Chat from "../Chat/Chat";
import "./chatList.css"
import {useSelector} from "react-redux"

function ChatList (){
    const searchUser = useSelector(state => state.search.search)
    const users = useSelector(state => state.users.filter(u => u.name.toLowerCase().includes(searchUser.toLowerCase()) ))
    const messages = useSelector(state => state.messages.messages)

    return (
        <div className="chatList-main">
            <h1>Chats</h1>
            {users.map((user, id) =>{
                const userMessages = messages.filter(mes => mes.chatId === user.id)
                return <Chat key={id} user = {user} messages = {userMessages} />
            })}
        </div>
    ) 
}

export default ChatList