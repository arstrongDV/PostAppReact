import { stopSubmit } from "redux-form"
import { AuthAPI } from "../API/api"

let SET_USERS_DATA = 'auth/SET_USERS_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERS_DATA:
            return{
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export let setUsersData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA,
    payload: { userId, email, login, isAuth }
});


export const AuthThunkCreator = () =>  async(dispatch) => {
    let data = await AuthAPI.getAuth()
    if(data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setUsersData(id, email, login, true))
    }
    else{
        return data.messages
    }
}

export const LoginThunk = (email, password, rememberMe) => async(dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe)
    if(response.resultCode === 0){
        alert('Welcome to yours account!')
        dispatch(AuthThunkCreator())
    }
    else{
        if(response.data.messages.length > 0){
            dispatch(stopSubmit('login', {_error: response.data.messages}))
        }
    }
}

export const LogoutThunk = () => async(dispatch) => {
    let response = await AuthAPI.logout()
    if(response.resultCode === 0){
        dispatch(setUsersData(null, null, null, false))
    }
}

export default authReducer;