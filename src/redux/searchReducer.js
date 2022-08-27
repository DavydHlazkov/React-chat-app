const defaultState = {
    search : ''
}

const ADD_SEARCH = "ADD_SEARCH"

export const searchReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_SEARCH:
            return {...state, search: action.value}

        default:
            return state    
    }
}

export const addSearch = (value) => ({type: ADD_SEARCH, value})