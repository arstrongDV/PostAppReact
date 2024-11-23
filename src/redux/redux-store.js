import {  legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import {thunk as thunkMiddlewar } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import initalizeReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    initialize: initalizeReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewar))


export default store;