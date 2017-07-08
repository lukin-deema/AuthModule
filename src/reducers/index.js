import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import users from './users';
import notes from './notes';
import login from './login';
import route from './route';
import usersVisibility from './usersVisibility';

const appReducers = combineReducers({
    routing: routerReducer,
    users,
    notes,
    login,
    route,
    usersVisibility
});

export default appReducers;