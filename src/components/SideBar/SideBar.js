import React from "react";
import "./sidebar.css"
import Search from "../Search/Search";
import ChatList from "../ChatList/ChatList";
import User from "../User/User";

function SideBar(){
    
    const users = [
        {
          id: 1,
          name: "Alice Freeman",
          image: "https://www.pngkey.com/png/full/782-7822206_sharon-pope-round-woman.png",
          read: true
        },
        {
          "id": 2,
          "name": "Josefina",
          "image": "https://octopusventures.com/wp-content/uploads/sites/8/2021/12/Millen-Wolde-Selassie_Octopus-Ventures_Headshot-384x384.png",
          "read": true
        },
        {
          "id": 3,
          "name": "Velazquez",
          "image": "https://www.retalkasia.com/sites/default/files/styles/large/public/contributors/photo_trent.png",
          "read": true
        },
        {
          "id": 4,
          "name": "Barrera",
          "image": "https://womo.ua/wp-content/uploads/2018/11/1554_oooo.plus_.png",
          "read": false
        }
      ]

      const messages = [
        {
          "id": 1,
          "chatId": 1,
          "text": "I'm okay...",
          "time": "2022-08-21T05:28:27+00:00"
        },
        {
          "id": 3,
          "chatId": 2,
          "text": "We are losing money! Quick!",
          "time": "2022-08-21T05:28:27+00:00"
        },
        {
          "id": 2,
          "chatId": 3,
          "text": "Yeah, We arrived last week.",
          "time": "2022-08-21T05:28:27+00:00"
        }
      ]
  
    return ( 
        <aside className="main-sidebar">
            <div className="user-search">
                <User imgUrl="https://www.politikwissenschaft.tu-darmstadt.de/media/politikwissenschaft/ifp_bilder/mitarbeitende_1/unbearbeitet/icon_m_415x415.png"/>
                <Search value={''} setValue={''} />
            </div>
            <ChatList users ={users} messages={messages}/>
        </aside>
    )
}
export default SideBar