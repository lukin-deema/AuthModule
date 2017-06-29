import * as constants from '../constants';
import * as localStore from '../api/localStore';

const users = (state = localStore.load(constants.KEY_USERS, []), action) => {
    let users;
    switch (action.type) {
        case constants.REGISTER_NEW:
            users = [
                ...state,
                {
                    id: action.id,
                    email: action.email,
                    password: action.password,
                    deleted: false
                }
            ];
            localStore.save(constants.KEY_USERS, users);
            return users;
        case constants.TOGGLE_USERS:
            users = state.map(x => {
                if (action.id === x.id) {
                    x.deleted = !x.deleted;
                    return x;
                }
                return x;
            });
            localStore.save(constants.KEY_USERS, users);
            return users;
        default:
            return state;
    }
};

export default users;