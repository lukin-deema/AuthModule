import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UsersLogin extends React.Component {
    constructor({onClick}) {
        super();
        this.state = {
            onClick,
        };
    }

    onSubmit = e => {
        e.preventDefault();
        const email = this.refs.email.input.value.trim();
        const pass = this.refs.pass.input.value.trim();
        if (!email || !pass ) {
            return;
        }
        this.state.onClick({
            email: email,
            password: pass
        });
        this.refs.email.input.value = '';
        this.refs.pass.input.value = '';
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
                    <RaisedButton type="submit" label="Login" primary={true} style={{margin: 12}} />
                </form>
            </div>
        )
    }
}

export default UsersLogin;
