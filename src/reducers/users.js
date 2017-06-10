import * as constants from '../constants';

const users = (state = [], action) => {
    switch (action.type) {
        case constants.REGISTER_NEW:
            return [
                ...state,
                {
                    id: action.id,
                    email: action.email,
                    name: action.name,
                    password: action.password,
                    deleted: false
                }
            ];
        default:
            return state
    }
};

export default users;