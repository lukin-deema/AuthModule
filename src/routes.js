import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react';

import UserRoute from './components/UserRoute';
import NoteRoute from './components/NoteRoute';

// see https://reacttraining.com/react-router/web/example/route-config
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);
const routes = [
    {
        path: "/user",
        component: UserRoute
    },{
        path: "/note",
        component: NoteRoute
    }
];
const renderRouter = ()=>{
    return routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ))
};
const renderMenu=()=>{
    return (
        <ul>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/note">Note</Link></li>
        </ul>
    )
};


export default ()=> {
    return (
        <Router>
            <div>
                {renderMenu()}
                <hr/>

                {renderRouter()}
            </div>
        </Router>
    )
}