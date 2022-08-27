import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat2.css"
import { useSelector } from "react-redux";

function Chat2 () {

    const user = useSelector(state => state.users[1])
    const messages = useSelector(state => state.messages[1])

    return(
        <div className="chat1-main">
            <SideBar messages={messages}/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat2