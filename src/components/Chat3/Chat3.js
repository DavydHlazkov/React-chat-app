import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat3.css"

function Chat3 ({messages}) {

    const user = {
              "id": 3,
              "name": "Velazquez",
              "image": "https://www.retalkasia.com/sites/default/files/styles/large/public/contributors/photo_trent.png"
            }
    
    return(
        <div className="chat1-main">
            <SideBar/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat3