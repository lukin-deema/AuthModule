import React from 'react';
import UsersListConnect from '../containers/UsersList';
import UsersAddConnect from '../containers/UsersAdd';
import UsersFilter from './UsersFilter';

const UsersRoute = () => (
    <div>
        <UsersAddConnect/>
        <UsersFilter/>
        <UsersListConnect/>
    </div>
);
export default UsersRoute;