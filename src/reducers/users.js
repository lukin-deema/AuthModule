import * as constants from '../constants';
import * as userApi from '../api/users';

const users = (state = userApi.get(), action) => {
    let users;
    switch (action.type) {
        case constants.REGISTER_NEW:
            const newUser = {
                id: action.id,
                email: action.email,
                password: action.password,
                deleted: false
            };
            userApi.create(newUser);
            users = [ ...state, newUser ];
            return users;
        case constants.TOGGLE_USERS:
            let updatedUser;
            users = state.map(x => {
                if (action.id === x.id) {
                    x.deleted = !x.deleted;
                    updatedUser= {
                        deleted: x.deleted,
                        email : x.email,
                        password : x.password
                    };
                    return x;
                }
                return x;
            });
            if(updatedUser) {
                userApi.update(action.id, updatedUser);
            }
            return users;
        default:
            return state;
    }
};

export default users;