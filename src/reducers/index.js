import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import usersVisibility from './usersVisibility';

const appReducers = combineReducers({
    routing: routerReducer,
    users,
    usersVisibility
});

export default appReducers