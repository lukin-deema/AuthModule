import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';

const NoteList = ({ notes, onVisibilityClick }) => (
    <ul>
        {renderNotes(notes, onVisibilityClick)}
    </ul>
);
const renderNotes=(notes, onVisibilityClick)=>{
    return notes.map((user, idx)=> {
        return (<ListItem
            key={idx}
            primaryText={user.text}
        >
        </ListItem>)
    })
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default NoteList;