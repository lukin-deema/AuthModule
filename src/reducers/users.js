import * as constants from '../constants';

const users = (state = [{
    id: 1,
    email: 'ww@cva.s',
    password: 'pa',
    deleted: false
}], action) => {
    switch (action.type) {
        case constants.REGISTER_NEW:
            return [
                ...state,
                {
                    id: action.id,
                    email: action.email,
                    password: action.password,
                    deleted: false
                }
            ];
        default:
            return state
    }
};

export default users;