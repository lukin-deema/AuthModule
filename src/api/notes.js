import * as localStore from './localStore';
import * as constants from '../constants';

function create(note) {
    const notes = localStore.load(constants.KEY_NOTE, []);
    notes.push(note);
    localStore.save(constants.KEY_NOTE, notes);
    // return get();
}

function update(id, note) {
    const notes = localStore.load(constants.KEY_NOTE, []);
    const index = notes.findIndex(x => x.id === id);
    notes[index].text = note.text;
    localStore.save(constants.KEY_NOTE, notes);
    // return get();
}

function remove(id) {
    const users = localStore.load(constants.KEY_NOTE, []);
    localStore.save(constants.KEY_NOTE, users.filter(x => x.id !== id));
    // return get();
}

function get() {
    return localStore.load(constants.KEY_NOTE, []);
}

module.exports = {
    create,
    update,
    remove,
    get
};
