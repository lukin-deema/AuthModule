import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import UsersRoute from './components/UsersRoute';
import RegisterUserRoute from './components/RegisterUserRoute';
import LoginUserRoute from './components/LoginUserRoute';
import AuthRoute from './components/AuthRoute';
import NotesRoute from './components/NotesRoute';

import {logout} from './actions';

// see https://reacttraining.com/react-router/web/example/route-config

const renderRouter = (login, dispatch) => {
    return (<div>
        <Route path="/register" component={RegisterUserRoute}/>
        <Switch>
            <Route path="/login" component={LoginUserRoute}/>
            <Route path="/logout" render={() => {
                dispatch(logout(login && login.email));
                return <Redirect to="/login"/>;
            }}/>
        </Switch>
        <Switch>
            <Route exact path="/auth" render={onEnterAuth(login, <AuthRoute/>)}/>
            <Route path="/auth/user" render={onEnterAuth(login, <UsersRoute/>)}/>
            <Route path="/auth/note" render={onEnterAuth(login, <NotesRoute/>)}/>
        </Switch>
    </div>)
};
const onEnterAuth = (login, component) => {
    return () => {
        return login ? component
            : <Redirect to="/register"/>
    };
};

const button = (login) => {
    if (!login) {
        return <Link to="/login">
            <RaisedButton label="Login"
                          primary={true}
                          style={{marginRight: 5}}
            />
        </Link>
    } else {
        return <Link to="/logout">
            <RaisedButton label="Logout"
                          primary={true}
                          style={{marginRight: 5}}
            />
        </Link>
    }
}

const renderMenu = (login) => {
    return (
        <Toolbar>
            <ToolbarGroup>
                {!login && <Link to="/register">
                    <RaisedButton label="Register"
                                  primary={true}
                                  style={{marginRight: 5}}
                    />
                </Link>}
                {button(login)}
                <Link to="/auth">
                    <RaisedButton label="auth"
                                  primary={true}
                                  style={{marginRight: 5}}
                    />
                </Link>
                <Link to="/auth/user">
                    <RaisedButton label="User"
                                  primary={true}
                                  style={{marginRight: 5}}
                    />
                </Link>
                <Link to="/auth/note">
                    <RaisedButton label="Note" primary={true}/>
                </Link>
            </ToolbarGroup>
        </Toolbar>
    )
};


export default class RouteApp extends React.Component {
    constructor({login, dispatch}) {
        super();
        this.state = {
            login, dispatch
        };
    }

    componentWillReceiveProps({login, dispatch}) {
        this.setState({login, dispatch})
    }

    render() {
        return (
            <div style={{minWidth: '500px', width: '50%', margin: 'auto'}}>
                <Router>
                    <div>
                        {renderMenu(this.state.login)}
                        <hr/>
                        {renderRouter(this.state.login, this.state.dispatch)}
                    </div>
                </Router>
            </div>
        )
    }
}