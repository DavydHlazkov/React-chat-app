import React, { useState} from "react";
import Message from "../Message/Message";
import User from "../User/User";
import "./body.css"
import axios from "axios";

function Body({user, messages}){

    const [ms, setMs] = useState(messages)
    const [inputValue, setInputValue] = useState('')

    function handleKeypress(e) {
        
        if (e.keyCode === 13) {
          setMs(oldMs => [...oldMs, {"text": inputValue, "time": new Date(), "myMessage": true }])
          
          axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => res.data)
            .then(data => {
              setTimeout(() => {
                setMs(oldMs => [...oldMs, {"text": data.value, "time": new Date(), "myMessage": false}])
              }, 1000)
            })
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
                {ms.map((e, i) => <Message message = {e} userImage={user.image} key={i} />)}
                
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