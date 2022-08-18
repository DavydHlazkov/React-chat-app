import React from "react";
import "./sidebar.css"
import Search from "../Search/Search";
import ChatList from "../ChatList/ChatList";
import User from "../User/User";

function SideBar(){

    return (
        <aside className="main-sidebar">
            <div className="user-search">
                <User/>
                <Search/>
            </div>
            <ChatList/>

        </aside>
    )
}
export default SideBar