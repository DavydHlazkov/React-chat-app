import React from "react";
import Message from "../Message/Message";
import Input from "../Input/Input";
import User from "../User/User";
import "./body.css"

function Body(){
    return (
        <div className="main-body">
            <div className="user">
                <User/>
                <h1>Vasyl Kit</h1>
            </div>
            <div>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="message-input">
                <Input/>
            </div>
        </div>
    )
}

export default Body