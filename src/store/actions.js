import { ADD, SUB, GET_USERS, USERS_TYPE } from './constants'

export const addActions = () => ({ type: ADD })

export const subActions = () => ({ type: SUB })



export const getUserActions = async (dispatch) => {
    try {
        dispatch({ type: USERS_TYPE.LOAD_INIT })
        setTimeout(async () => {
            dispatch({ type: GET_USERS, users: await getUser() })
            return  dispatch({ type: USERS_TYPE.LOAD_SUCCESS })
        }, 4000)
    } catch (error) {
        return dispatch({ type: USERS_TYPE.LOAD_ERROR })
    }
    
}


export const getUser = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    return users
}