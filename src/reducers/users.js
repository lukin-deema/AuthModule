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
        case constants.TOGGLE_USERS:
            return state.map(x => {
                if (action.id === x.id){
                    x.deleted = !x.deleted;
                    return x;
                }
                return x;
            });
        default:
            return state;
    }
};

export default users;