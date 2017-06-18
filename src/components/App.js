import React from 'react';
import UserFilterConnect from '../containers/UsersFilter';
import AddNewUserConnect from '../containers/AddNewUser';

const App = () => (
     <div>
         <AddNewUserConnect/>
         <UserFilterConnect/>
     </div>
);
export default App;