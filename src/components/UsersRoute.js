import React from 'react';
import UsersFilterConnect from '../containers/UsersFilter';
import UsersAddConnect from '../containers/UsersAdd';
import UsersFilter from './UsersFilter';

const UsersRoute = () => (
     <div>
         <UsersAddConnect/>
         <UsersFilter/>
         <UsersFilterConnect/>
     </div>
);
export default UsersRoute;