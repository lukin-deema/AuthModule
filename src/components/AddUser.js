import React from 'react';
import {addNewUser} from '../actions';

class AddUser extends React.Component {
    constructor(store) {
        super();
        this.state = {store};
    }

    onSubmit = e => {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const pass = this.refs.pass.value.trim();
        const passConfirm = this.refs.passConfirm.value.trim();
        if (!email || !pass || !passConfirm || pass !== passConfirm) {
            return;
        }
        this.state.store.dispatch(addNewUser({
            id: this.state.store.usersNextIndex,
            email: this.refs.email.value,
            password: this.refs.pass.value
        }));
        this.refs.email.value = '';
        this.refs.pass.value = '';
        this.refs.passConfirm.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <span>Email:</span><input ref="email" defaultValue="asd@aqsd.c"/><br/>
                    <span>Pass:</span><input ref="pass" defaultValue="qweqwe"/><br/>
                    <span>Confirm:</span><input ref="passConfirm" defaultValue="qweqwe"/><br/>
                    <button type="submit">
                        Add user
                    </button>
                </form>
            </div>
        )
    }
}

export default AddUser;
