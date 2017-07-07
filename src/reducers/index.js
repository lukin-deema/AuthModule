import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import users from './users';
import notes from './notes';
import login from './login';
import usersVisibility from './usersVisibility';

const appReducers = combineReducers({
    routing: routerReducer,
    users,
    notes,
    login,
    usersVisibility
});

export default appReducers;