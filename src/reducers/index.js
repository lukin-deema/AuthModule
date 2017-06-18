import { combineReducers } from 'redux';
import users from './users';
import usersVisibility from './usersVisibility';

const appReducers = combineReducers({
    users,
    usersVisibility
});

export default appReducers