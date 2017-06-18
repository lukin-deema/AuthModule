import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../actions';

const AddTodo = (store) => {
    let email;
    let pass;
    let passConfirm;

    const onSubmit = e => {
        e.preventDefault();
        if (!email.value.trim() || !pass.value.trim()
            || !passConfirm.value.trim() || pass.value !== passConfirm.value) {
            return;
        }
        store.dispatch(addNewUser({
            email: email.value,
            password: pass.value
        }));
        email.value = '';
        pass.value = '';
        passConfirm.value = '';
    };

    const onRefEmail = node => {
        email = node;
    };
    const onRefPass = node => {
        pass = node;
    };
    const onRefPassConfirm = node => {
        passConfirm = node;
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <span>Email:</span><input ref={onRefEmail} value="asd@aqsd.c" /><br/>
                <span>Pass:</span><input ref={onRefPass} value="qweqwe"  /><br/>
                <span>Confirm:</span><input ref={onRefPassConfirm} value="qweqwe" /><br/>
                <button type="submit">
                    Add user
                </button>
            </form>
        </div>
    )
};

const AddNewUserConnect = connect()(AddTodo);

export default AddNewUserConnect;
