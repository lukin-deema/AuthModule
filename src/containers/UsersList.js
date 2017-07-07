import {connect} from 'react-redux'
import {toggleVisibility} from '../actions'
import UserList from '../components/UsersList';

import * as constants from '../constants';

const getVisible = (users, filter) => {
    switch (filter) {
        case constants.VISIBLE_ALL:
            return users;
        case constants.VISIBLE_DELETED:
            return users.filter(t => t.deleted);
        case constants.VISIBLE_REGISTERED:
            return users.filter(t => !t.deleted);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    users: getVisible(state.users, state.usersVisibility)
});

const mapDispatchToProps = {
    onVisibilityClick: toggleVisibility
};

const UserFilterConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserFilterConnect;