import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import UsersRoute from './components/UsersRoute';
import RegisterUserRoute from './components/RegisterUserRoute';
import LoginUserRoute from './components/LoginUserRoute';
import AuthRoute from './components/AuthRoute';
import NotesRoute from './components/NotesRoute';

import {logout, nextRoute} from './actions';

// see https://reacttraining.com/react-router/web/example/route-config

const onEnterAuth = (login, component) => {
    return () => {
        return login ? component
            : <Redirect to="/register"/>
    };
};
const style = {margin: 5, color: "blue"};
const activeStyle = {margin: 15, color: "red"};


export default class RouteApp extends React.Component {
    constructor(store) {
        super();
        this.state = {
            login: store.login,
            dispatch: store.dispatch,
            nextRoute: store.nextRoute,
        };
    }

    componentWillReceiveProps({login, nextRoute, dispatch}) {
        this.setState({login, nextRoute, dispatch})
    }

    renderRouter = () => {
        return (<div>
            <Route path="/register" component={RegisterUserRoute}/>
            <Switch>
                <Route path="/login" component={LoginUserRoute}/>
                <Route path="/logout" render={() => {
                    this.state.dispatch(logout());
                    return <Redirect to="/login"/>;
                }}/>
            </Switch>
            <Switch>
                <Route exact path="/auth" render={onEnterAuth(this.state.login, <AuthRoute/>)}/>
                <Route path="/auth/user" render={onEnterAuth(this.state.login, <UsersRoute/>)}/>
                <Route path="/auth/note" render={onEnterAuth(this.state.login, <NotesRoute/>)}/>
            </Switch>
        </div>)
    };
    changeRoute = (newRoute) => {
        this.state.dispatch(nextRoute(newRoute))
    };
    renderMenu = () => {
        return (
            <Toolbar>
                <ToolbarGroup >
                    {!this.state.login &&
                        <Link to="/register" onClick={this.changeRoute.bind(this, "/register")}>
                            <RaisedButton label="Register" style={style}
                                          primary={this.state.nextRoute === '/register'}/>
                        </Link>
                    }
                    {!this.state.login ?
                        <Link to="/login" onClick={this.changeRoute.bind(this, "/login")}>
                            <RaisedButton label="Login" style={style}
                                          primary={this.state.nextRoute === '/login'}/>
                        </Link>
                        :
                        <Link to="/logout" onClick={this.changeRoute.bind(this, "/logout")}>
                            <RaisedButton label="Logout" style={style}
                                          primary={this.state.nextRoute === '/logout'}/>
                        </Link>
                    }
                    {this.state.login &&
                        <Link to="/auth" onClick={this.changeRoute.bind(this, "/auth")}>
                            <RaisedButton label="auth" style={style}
                                          primary={this.state.nextRoute === '/auth'}/>
                        </Link>
                    }
                    {this.state.login &&
                        <Link to="/auth/user" onClick={this.changeRoute.bind(this, "/auth/user")}>
                            <RaisedButton label="User" style={style}
                                          primary={this.state.nextRoute === '/auth/user' }/>
                        </Link>
                    }
                    {this.state.login &&
                        <Link to="/auth/note" onClick={this.changeRoute.bind(this, "/auth/note")}>
                            <RaisedButton label="Note" style={style}
                                          primary={this.state.nextRoute === '/auth/note'}/>
                        </Link>
                    }
                </ToolbarGroup>
            </Toolbar>
        )
    };

    render() {
        return (
            <div style={{minWidth: '500px', width: '50%', margin: 'auto'}}>
                <Router>
                    <div>
                        {this.renderMenu()}
                        <hr/>
                        {this.renderRouter()}
                    </div>
                </Router>
            </div>
        )
    }
}