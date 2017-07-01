import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const UserList = ({ users, onVisibilityClick }) => (
    <List>
        {renderUsers(users, onVisibilityClick)}
    </List>
);
const renderUsers=(users, onVisibilityClick)=>{
    return users.map((user, idx)=> {
        return (<ListItem
                key={idx}
                primaryText={user.email}
                onClick={() => onVisibilityClick(user.id)}
                leftIcon={user.deleted?<ActionGrade color="white" />:<ActionGrade color="green" />}
        >
        </ListItem>)
    })
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        deleted: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onVisibilityClick: PropTypes.func.isRequired
};

export default UserList;