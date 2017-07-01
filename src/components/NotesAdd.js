import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

const NoteAdd = (store)=>{
    let input;

    return (<div>
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                store.dispatch(addNote({
                    id: store.usersNextIndex,
                    text:input.value
                }));
                input.value = ''
            }}
        >
            <input
                ref={node => {
                    input = node
                }}
            />
            <button type="submit">
                Add Note
            </button>
        </form>
        </div>);
};

export default NoteAdd;

// export default NoteAddConnected
// const NoteAddConnected = connect()(NoteAdd)
// export default NoteAddConnected
