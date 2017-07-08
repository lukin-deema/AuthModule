import * as constants from '../constants';
import * as userApi from '../api/users';

const route = (state = '/login', action) => {
    switch (action.type) {
        case constants.CHANGE_ROUTE:
            return action.nextRoute;
        default:
            return state;
    }
};

export default route;