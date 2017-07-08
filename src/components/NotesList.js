import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';

import {removeNote} from '../actions'

const NoteList = ({notes, dispatch}) => (
    <List>
        {renderNotes(notes, dispatch)}
    </List>
);
const onRemoveClick = (dispatch, id) => {
    dispatch(removeNote(id))
};

const renderNotes = (notes, dispatch) => {
    return notes.map((node, idx) => {
        return (<ListItem
            key={idx}
            primaryText={node.text}
            rightIcon={<ContentDelete
                onClick={() => onRemoveClick(dispatch, node.id)}/>
            }
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