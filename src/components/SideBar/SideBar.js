import React from "react";
import "./sidebar.css"
import Search from "../Search/Search";
import ChatList from "../ChatList/ChatList";
import User from "../User/User";

function SideBar(){

    return (
        <aside>
            <div>
                <User/>
                <Search/>
            </div>
            <ChatList/>

        </aside>
    )
}
export default SideBar