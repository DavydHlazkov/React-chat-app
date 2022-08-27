import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat3.css"
import { useSelector } from "react-redux";

function Chat3 () {

    const user = useSelector(state => state.users[2])
    const messages = useSelector(state => state.messages[2])
    
    return(
        <div className="chat1-main">
            <SideBar messages={messages}/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat3