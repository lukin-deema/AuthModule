import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import notes from './notes';
import usersVisibility from './usersVisibility';

const appReducers = combineReducers({
    routing: routerReducer,
    users,
    notes,
    usersVisibility
});

export default appReducers;