import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addNewUser} from '../actions';

class UsersAdd extends React.Component {
    constructor(store) {
        super();
        this.state = {store};
    }

    onSubmit = e => {
        e.preventDefault();
        const email = this.refs.email.input.value.trim();
        const pass = this.refs.pass.input.value.trim();
        const passConfirm = this.refs.passConfirm.input.value.trim();
        if (!email || !pass || !passConfirm || pass !== passConfirm) {
            return;
        }
        this.state.store.dispatch(addNewUser({
            id: this.state.store.usersNextIndex,
            email: this.refs.email.input.value,
            password: this.refs.pass.input.value
        }));
        this.refs.email.input.value = '';
        this.refs.pass.input.value = '';
        this.refs.passConfirm.input.value = '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        fullWidth={true}
                        defaultValue="asd@aqsd.c"
                        ref="email"
                        hintText="email"
                        floatingLabelText="Email"
                    /><br/>
                    <TextField
                        fullWidth={true}
                        ref="pass"
                        hintText="password"
                        floatingLabelText="Password"
                        type="password"
                        defaultValue="qweqwe"
                    /><br/>
                    <TextField
                        fullWidth={true}
                        ref="passConfirm"
                        hintText="password"
                        floatingLabelText="Password"
                        type="password"
                        defaultValue="qweqwe"
                    /><br/>
                    <RaisedButton type="submit" label="Add user" primary={true} style={{margin: 12}} />
                </form>
            </div>
        )
    }
}

export default UsersAdd;
