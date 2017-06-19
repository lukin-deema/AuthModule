import * as constants from '../constants';

const filter = (state = constants.VISIBLE_ALL, action) => {
    switch (action.type) {
        case constants.SET_VISIBILITY_FILTER:
            return action.visibilityFilter;
        default:
            return state
    }
};

export default filter;