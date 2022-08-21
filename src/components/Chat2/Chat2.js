import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat2.css"

function Chat2 ({messages}) {

    const user ={
          "id": 2,
          "name": "Josefina",
          "image": "https://octopusventures.com/wp-content/uploads/sites/8/2021/12/Millen-Wolde-Selassie_Octopus-Ventures_Headshot-384x384.png"
        }

    return(
        <div className="chat1-main">
            <SideBar/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat2