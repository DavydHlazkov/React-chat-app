import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat4.css"
import { useSelector } from "react-redux";

function Chat4 () {

    const user = useSelector(state => state.users[3])
    const messages = useSelector(state => state.messages[3])

    return(
        <div className="chat1-main">
            <SideBar messages={messages}/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat4