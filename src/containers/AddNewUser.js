import React from 'react'
import { connect } from 'react-redux'
import { addNewUser } from '../actions'

let AddTodo = (store) => {
    let input;

    const onSubmit = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        store.dispatch(addTodo(input.value));
        input.value = '';
    };

    const onRef = node => {
        input = node;
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={onRef} />
                <button type="submit">
                    Add user
                </button>
            </form>
        </div>
    )
};

AddTodoConnect = connect()(AddTodo);

export default AddTodoConnect;
