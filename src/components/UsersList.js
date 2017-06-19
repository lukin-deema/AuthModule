import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onVisibilityClick }) => (
    <ul>
        {renderUsers(users, onVisibilityClick)}
    </ul>
);
const renderUsers=(users, onVisibilityClick)=>{
    return users.map((user, idx)=> {
        const style = {"textDecoration": user.deleted ? "line-through" : "underline"};
        return (<li key={idx} onClick={() => onVisibilityClick(user.id)}>
            <span style={style}>{user.email}</span>
        </li>)
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