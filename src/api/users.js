import * as localStore from './localStore';
import * as constants from '../constants';

function create(user) {
    const users = localStore.load(constants.KEY_USERS, []);
    users.push(user);
    localStore.save(constants.KEY_USERS, users);
    // return get();
}

function update(id, user) {
    const users = localStore.load(constants.KEY_USERS, []);
    const index = users.findIndex(x => x.id === id);
    users[index].email = user.email;
    users[index].password = user.password;
    users[index].deleted = user.deleted;
    localStore.save(constants.KEY_USERS, users);
    // return get();
}

function remove(id) {
    const users = localStore.load(constants.KEY_USERS, []);
    localStore.save(constants.KEY_USERS, users.filter(x => x.id !== id));
    // return get();
}

function get() {
    return localStore.load(constants.KEY_USERS, []);
}

module.exports = {
    create,
    update,
    remove,
    get
};
