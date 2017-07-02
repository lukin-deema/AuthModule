import { HashRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import UsersRoute from './components/UsersRoute';
import NotesRoute from './components/NotesRoute';

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
        component: UsersRoute
    },{
        path: "/note",
        component: NotesRoute
    }
];
const renderRouter = ()=>{
    return routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ))
};
const renderMenu=()=>{
    return (
        <Toolbar>
            <ToolbarGroup>
                <Link to="/user">
                    <RaisedButton label="User"
                                  primary={true}
                                  style={{marginRight:5}}
                    />
                </Link>
                <Link to="/note">
                    <RaisedButton label="Note" primary={true}/>
                </Link>
            </ToolbarGroup>
        </Toolbar>
    )
};


export default ()=> {
    return (
        <div style={{minWidth: '500px',width:'50%',margin:'auto'}}>
            <Router>
                <div>
                    {renderMenu()}
                    <hr/>
                    {renderRouter()}
                </div>
            </Router>
        </div>
    )
}