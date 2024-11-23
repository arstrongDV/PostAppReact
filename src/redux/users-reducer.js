import { UsersAPI, FollowAPI } from "../API/api"
import { updateObjectsInArray } from "../utils/object-helpers"

let FOLLOW = 'users/FOLLOW'
let UNFOLLOW = 'users/UNFOLLOW'
let FOLLOWING = 'users/FOLLOWING'
let SET_USERS = 'users/SET_USERS'
let PAGE_SELECT = 'users/PAGE_SELECT'
let SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING_PROGRES = 'users/TOGGLE_IS_FOLLOWING_PROGRES'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 20,
    portionSize: 10,
    currentPage: 1,
    isFatching: true,
    followingInProgres: []
}

let usersReducer = (state=initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", { followed: true })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, "id", { followed: false }) // This should set followed to false.
            };


        case SET_USERS:
            return{
                ...state,
                users: [ ...action.users ]
            }
        
        case PAGE_SELECT:
            return{
                ...state,
                currentPage: action.pageNum
            }

        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFatching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRES:
            return{
                ...state,
                followingInProgres: action.following 
                ? [...state.followingInProgres, action.userId]
                : state.followingInProgres.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export let follow = (userId) => ({
    type: FOLLOW,
    userId
})

export let unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})

export let setUsers = (users) => ({
    type: SET_USERS,
    users
})

export let selectPage = (pageNum) => ({
    type: PAGE_SELECT,
    pageNum
})

export let setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
})

export let IsFatching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export let isFollowing = (following, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRES,
    following,
    userId
})



export const getUsersThunkCreator = (currentPage, pageSize) => async(dispatch) => {
    dispatch(selectPage(currentPage))
    dispatch(IsFatching(true))
    let data = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(IsFatching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}

export const FollowUnfollowFlow = (userId, APIMethod, ActionCreator) => async (dispatch) => {
    dispatch(isFollowing(true, userId));
    let response = await APIMethod(userId);
    if (response.resultCode === 0) {
        dispatch(ActionCreator(userId));
    }
    dispatch(isFollowing(false, userId));
}


export const UnfollowThunkCreator = (userId) => async (dispatch) => {
    let APIMethod = FollowAPI.unfollow;
    await FollowUnfollowFlow(userId, APIMethod, unfollow)(dispatch); // This will call the function as a thunk.
}

export const FollowThunkCreator = (userId) => async (dispatch) => {
    let APIMethod = FollowAPI.follow;
    await FollowUnfollowFlow(userId, APIMethod, follow)(dispatch); // This will call the function as a thunk.
}



export default usersReducer;