import React from 'react';
import {connect} from 'react-redux';
import AddUser from '../components/AddUser';

const calculateNextIndex = (state) => {
    return Math.max(state.users.map(x => x.id)) + 1;
};

const mapStateToProps = (state) => ({
    usersNextIndex: calculateNextIndex(state)
});

export default connect(mapStateToProps)(AddUser);
