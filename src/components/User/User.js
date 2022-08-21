import React from "react";
import "./User.css"

function User ({imgUrl}){
    return(
        <div className="main-user">
            <img className="user-img" src={imgUrl} alt="user"></img>
        </div>
    )
}
export default User