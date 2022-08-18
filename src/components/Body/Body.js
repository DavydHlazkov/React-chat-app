import React from "react";
import Message from "../Message/Message";
import Input from "../Input/Input";
import User from "../User/User";

function Body(){
    return (
        <div>
            <div>
                <User/>
                <h1>Vasyl Kit</h1>
            </div>
            <div>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div>
                <Input/>
            </div>
        </div>
    )
}

export default Body