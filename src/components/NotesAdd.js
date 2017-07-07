import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {addNote} from '../actions'

class NoteAdd extends React.Component {
    constructor(store) {
        super();
        console.log(store.nextIndex);
        this.state = {
            nextIndex: store.nextIndex,
            dispatch: store.dispatch
        };
    }

    componentWillReceiveProps({nextIndex}) {
        this.setState({nextIndex})
    }

    submit = e => {
        e.preventDefault();
        if (!this.refs.note.input.value.trim()) {
            return;
        }
        this.state.dispatch(addNote({
            id: this.state.nextIndex,
            text: this.refs.note.input.value
        }));
        this.refs.note.input.value = '';
    };

    render() {
        return (
            <form
                onSubmit={this.submit}
            >
                <TextField
                    fullWidth={true}
                    ref='note'
                    hintText="note"
                    floatingLabelText="Note"
                    defaultValue="qweqwe"
                />
                <RaisedButton
                    type="submit"
                    label="Add Note"
                    primary={true}
                    style={{margin: 12}}
                />
            </form>)
    }
}
;

export default NoteAdd;
