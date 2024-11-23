import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE'


let store = {
    _state: {
        dialogsPage: {
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'how are u?'},
                {id: 3, message: 'ja kilka'}
            ],
            newMessageText: '',
        
            dialogs: [
                {id: 1, name: 'Arsen'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Svieta'},
                {id: 4, name: 'Andrey'}
            ]
        },
    
        profilePage: {
            post: [
                {id: 1, message: 'Hi, how are u?', likesCount: '3'},
                {id: 2, message: 'Hello, world!', likesCount: '5'}
            ],
    
            newPostText: ''
        }
    },
    _renderTree() {
        console.log('ss');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._renderTree(this._state);
        
    }
};

export default store;
