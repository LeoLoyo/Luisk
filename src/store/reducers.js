import { combineReducers } from 'redux'
import { ADD, SUB, GET_USERS, USERS_TYPE } from './constants'

const initialState = {
  value: 0,
  users: []
}

const reducersApp = (state = initialState, action) => {
    if (action.type === ADD) return { ...state, value: state.value + 1 }
    if (action.type === SUB) return { ...state, value: state.value - 1 }
    if (action.type === GET_USERS) return { ...state, users: action.users }
    return state
}


const userInitialState = {
    loading: false
  }
  

const userReducers = (state = userInitialState, action) => {
    switch(action.type) {
        case USERS_TYPE.LOAD_INIT :
            return ({ ...state, loading: true })
        case USERS_TYPE.LOAD_SUCCESS :
            return ({ ...state, loading: false })
        case USERS_TYPE.LOAD_ERROR:
            return ({ ...state, loading: false , error: true })
        default: 
         return state
    }
}

export default combineReducers({ app: reducersApp, users: userReducers})