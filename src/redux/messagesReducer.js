
const defaultState = {
    messages :[
    
    {'text': "RHi!", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false, 'chatId':1, 'id': 0}, 
    {'text': "Hi! I haven't see you in few days. How are you?", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true, 'chatId':1, 'id': 1},
    {'text': "Not bad. I'm busy with the classes I'm taking. How about you?", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false, 'chatId':1, 'id': 2},
    {'text': "I'm okay...", 'time':"2022-08-21T05:28:27+00:00", "myMessage": true, 'chatId':1, 'id': 3},
    {'text': "RQuickly come to the meeting room 1B, we have a big server issue", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false, 'chatId':2, 'id': 0},
    {'text': "I'm having a breakfast right now, can't you wait for 10 minutes?", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true, 'chatId':2, 'id': 1},
    {'text': "We are losing money! Quick!", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false, 'chatId':2, 'id': 2},
    {'text': "RHi, Velazques.", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false, 'chatId':3, 'id': 0},
    {'text': "Good to meet you!", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true, 'chatId':3, 'id': 1},
    {'text': "Did you just arrive here?", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false, 'chatId':3, 'id': 2},
    {'text': "Yeah, We arrived last week.", 'time':"2022-08-21T05:29:27+00:00", "myMessage": false, 'chatId':3, 'id':3 }
    ]
}


const ADD_MESSAGE = "ADD_MESSAGE"
const ADD_FROM_API = "ADD_FROM_API"

export const messagesReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}

        default:
            return state    
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})
export const addFromApi = (message) => ({type: ADD_FROM_API, message})