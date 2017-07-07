import * as constants from '../constants';

export const addNewUser = (user) => {
    return {
        type: constants.REGISTER_NEW,
        id: user.id,
        email: user.email,
        password: user.password,
        deleted: false,
    }
};

export const toggleVisibility = (id) => {
    return {
        type: constants.TOGGLE_USERS,
        id
    }
};

export const toggleUserFilter = (visibilityFilter) => {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        visibilityFilter
    }
};

export const addNote = (note) => {
    return {
        type: constants.ADD_NOTE,
        id: note.id,
        text: note.text,
    }
};

export const removeNote = (id) => {
    return {
        type: constants.REMOVE_NOTE,
        id: id,
    }
};

export const login = (user) => {
    return {
        type: constants.LOGIN,
        email: user.email,
        password: user.password,
    }
};

export const logout = (user) => {
    return {
        type: constants.LOGOUT,
        email: user.email,
    }
};
