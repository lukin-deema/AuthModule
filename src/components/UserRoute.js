import React from 'react';
import UserFilterConnect from '../containers/UsersFilter';
import AddNewUserConnect from '../containers/AddUser';
import Footer from './Footer';

const UserRoute = () => (
     <div>
         <AddNewUserConnect/>
         <Footer/>
         <UserFilterConnect/>
     </div>
);
export default UserRoute;