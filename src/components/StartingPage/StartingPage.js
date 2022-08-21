import React from "react";
import SideBar from "../SideBar/SideBar";
import "./startingPage.css"
import NewChat from "../NewChat/NewChat";

function StartingPage (){

    return (
            <div className="page-main">
                <SideBar/>
                <NewChat/>                 
            </div>
    )
}

export default StartingPage