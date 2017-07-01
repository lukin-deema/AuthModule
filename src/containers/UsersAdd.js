import React from 'react';
import {connect} from 'react-redux';
import UsersAdd from '../components/UsersAdd';

const calculateNextIndex = (state) => {
    return Math.max(0, ...state.users.map(x => x.id)) + 1;
};

const mapStateToProps = (state) => ({
    nextIndex: calculateNextIndex(state)
});

export default connect(mapStateToProps)(UsersAdd);
