import React from 'react';
import UserFilterConnect from '../containers/UsersFilter';
import AddNewUserConnect from '../containers/AddUser';
import Footer from './Footer';

const App = () => (
     <div>
         <AddNewUserConnect/>
         <Footer/>
         <UserFilterConnect/>
     </div>
);
export default App;