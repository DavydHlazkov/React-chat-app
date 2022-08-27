import React from "react";
import "./sidebar.css"
import Search from "../Search/Search";
import ChatList from "../ChatList/ChatList";
import User from "../User/User";

function SideBar(){

  
    return ( 
        <aside className="main-sidebar">
            <div className="user-search">
                <User imgUrl="https://www.politikwissenschaft.tu-darmstadt.de/media/politikwissenschaft/ifp_bilder/mitarbeitende_1/unbearbeitet/icon_m_415x415.png"/>
                <Search />
            </div>
            <ChatList/>
        </aside>
    )
}
export default SideBar