import React, {useState} from "react";
import Message from "../Message/Message";
import User from "../User/User";
import "./body.css"
import {useDispatch, useSelector} from "react-redux"
import { addMessage } from "../../redux/messagesReducer";
import { axiosMessage } from "../../redux/getFromApi";

function Body({user}){
  const messages = useSelector(state => state.messages.messages.filter(mes => mes.chatId ===user.id))
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

    function handleKeypress(e) {
      if (e.keyCode === 13) {
        dispatch(addMessage({"text": inputValue, "time": new Date(), "myMessage": true, "chatId": user.id }))
        dispatch(axiosMessage(user.id))
        setInputValue('')
        }
      }

    return (
       
        <div className="main-body">
            <div className="user">
                <User imgUrl={user.image}/>
                <h1>{user.name}</h1>
            </div>
            <div>
                {messages.map((e, i) => <Message message = {e} userImage={user.image} key={i} />)}
                
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type message"
                    value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={handleKeypress}
                    />
            </div>
        </div>
    )
}

export default Body