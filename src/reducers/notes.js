import * as constants from '../constants';
import * as localStore from '../api/localStore';

let note = (state = localStore.load(constants.KEY_NOTE, []), action) => {
    let notes;
    switch (action.type) {
        case constants.ADD_NOTE:
            notes = [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];

            localStore.save(constants.KEY_NOTE, notes);
            return notes;
        case constants.REMOVE_NOTE:
            notes = state.filter(x => x.id !== action.id);
            localStore.save(constants.KEY_NOTE, notes);
            return notes;
        default:
            return state;
    }
};
export default note;