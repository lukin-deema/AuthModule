import * as constants from '../constants';
import * as noteApi from '../api/notes';

let note = (state = noteApi.get(), action) => {
    let notes;
    switch (action.type) {
        case constants.ADD_NOTE:
            const newNote = {
                id: action.id,
                text: action.text
            };
            notes = [ ...state, newNote ];
            noteApi.create(newNote);
            return notes;
        case constants.REMOVE_NOTE:
            notes = state.filter(x => x.id !== action.id);
            noteApi.remove(action.id);
            return notes;
        default:
            return state;
    }
};
export default note;