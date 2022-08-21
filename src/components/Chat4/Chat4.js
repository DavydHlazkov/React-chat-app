import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat4.css"

function Chat4 ({messages}) {

    const user = {
              "id": 4,
              "name": "Barrera",
              "image": "https://womo.ua/wp-content/uploads/2018/11/1554_oooo.plus_.png",
            }

    return(
        
        <div className="chat1-main">
            <SideBar/>
            <Body user={user} messages={messages}/>
        </div>
        
    )
}

export default Chat4