import * as constants from '../constants';

export const addNewUser = (user) => {
    return {
        type: constants.REGISTER_NEW,
        id: user.id,
        email: user.email,
        password: user.password,
    }
};

export const toggleVisibility = (visibilityFilter)=>{
    return {
        visibilityFilter
    }
};