import React from "react";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import "./chat1.css"

function Chat1 ({messages}) {
    
    const user =
        {
          id: 1,
          name: "Alice Freeman",
          image: "https://www.pngkey.com/png/full/782-7822206_sharon-pope-round-woman.png"
        }
         


    return(
        <div className="chat1-main">
            <SideBar/>
            <Body user={user} messages={messages}/>
        </div>
    )
}

export default Chat1