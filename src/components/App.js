import React from 'react';
import UserFilterConnect from '../containers/UsersFilter';
import AddNewUserConnect from '../containers/AddUser';
import Footer from './Footer';

const App = () => (
     <div>
         <AddNewUserConnect/>
         <UserFilterConnect/>
         <Footer/>
     </div>
);
export default App;