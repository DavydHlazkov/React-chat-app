import {createStore, combineReducers, applyMiddleware} from "redux"
import { userReducer } from "./userReducer"
import { messagesReducer } from "./messagesReducer"
import thunk from "redux-thunk"
import { searchReducer } from "./searchReducer"


const rootReducer = combineReducers({
    users : userReducer,
    messages : messagesReducer,
    search : searchReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))