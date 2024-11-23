const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

let initialState = {
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'ja kilka'}
    ],

    dialogs: [
        {id: 1, name: 'Arsen'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Svieta'},
        {id: 4, name: 'Andrey'}
    ]
}

let dialogsReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return{
                ...state,
                newMessageText: '',
                message: [...state.message, {id: 4, message: action.newMessageText}]
            }
        default:
            return state;
    }
}

export let addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;//