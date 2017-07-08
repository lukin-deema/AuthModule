import * as constants from '../constants';
import * as userApi from '../api/users';

const login = (state = userApi.getCurrentUser(), action) => {
    switch (action.type) {
        case constants.LOGIN:
            return userApi.login(action.email, action.password);
        case constants.LOGOUT:
            return userApi.logout();
        default:
            return state;
    }
};

export default login;