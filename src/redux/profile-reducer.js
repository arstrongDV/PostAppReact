import { ProfileAPI } from "../API/api"

const ADD_POST = 'profile/ADD-POST'
const SET_USERS_INFO = 'profile/SET_USERS_INFO'
const SET_NEW_STATUS = 'profile/SET_NEW_STATUS'

let initialState = {
    post: [
        {id: 1, message: 'Hi, how are u?', likesCount: '3'},
        {id: 2, message: 'Hello, world!', likesCount: '5'}
    ],
    profile: null,
    status: ''
}

let profileReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, {id: 3, message: action.newPostText, likesCount: 10}]
            };

        case SET_USERS_INFO:
            return{
                ...state,
                profile: action.info
            }

        case SET_NEW_STATUS:
            return{
                ...state,
                status: action.newStatus
            }

        default:
            return state;
    }

}

export let addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export let SetUsersInfo = (info) => ({ 
    type: SET_USERS_INFO, 
    info 
})
export let setStatus = (newStatus) => ({ 
    type: SET_NEW_STATUS,
    newStatus
})

export const getProfileThunkCreator = (userId) => async(dispatch) => {
    let data = await ProfileAPI.getProfile(userId)
    dispatch(SetUsersInfo(data))
}

export const getProfileStatusThunk = (userId) => async(dispatch) => {
    let data = await ProfileAPI.getStatus(userId)
     dispatch(setStatus(data))
}

export const putNewStatusThunk = (newStatus) => async(dispatch) => {
    let response = await ProfileAPI.updateStatus(newStatus)
    if(response.resultCode === 0){
        dispatch(setStatus(newStatus))
    }
}

export default profileReducer;