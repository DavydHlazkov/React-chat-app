 import axios from "axios"
 import { addMessage } from "./messagesReducer"
 
 
 export const axiosMessage = (userId) => {
      return function(dispatch){
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => res.data)
            .then(data => setTimeout(()=>dispatch(addMessage({"text": data.value, "time": new Date(), "myMessage": false, "chatId": userId })), 1000)) 
      }
    }
