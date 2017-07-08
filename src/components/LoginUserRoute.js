import React from 'react';
import UsersLoginConnected from '../containers/UsersLogin';
import UsersList from '../containers/UsersList';

const LoginUserRoute = () => (
    <div>
        <UsersLoginConnected/>
        <hr/>
        <UsersList/>
    </div>
);

export default LoginUserRoute;

