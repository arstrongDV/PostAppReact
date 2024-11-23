import { AuthThunkCreator } from "./auth-reducer"

let SET_INITALIZE = 'app/SET_USERS_DATA'

let initialState = {
    initalaized: false
}

let initalizeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITALIZE:
            return{
                ...state,
                initalaized: true
            }

        default:
            return state
    }
}

export let setInitalized = () => ({
    type: SET_INITALIZE
});


export const InitalizeApp = () => (dispatch) => {
    let promise = dispatch(AuthThunkCreator())
    Promise.all([promise])
    .then(() => {
        dispatch(setInitalized())
    })
}


export default initalizeReducer;