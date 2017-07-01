import React from 'react';
import {connect} from 'react-redux';
import NotesAdd from '../components/NotesAdd';

const calculateNextIndex = (state) => {
    const s = Math.max(0, ...state.notes.map(x => x.id)) + 1;
    return s
};

const mapStateToProps = (state) => ({
    usersNextIndex: calculateNextIndex(state)
});

export default connect(mapStateToProps)(NotesAdd);
