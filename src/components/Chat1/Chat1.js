import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat1.css"
import {useSelector} from "react-redux"

function Chat1 () {
    
    const user = useSelector(state => state.users[0])
    
    return(
        <div className="chat1-main">
            <SideBar />
            <Body user={user}/>
        </div>
    )
} 

export default Chat1