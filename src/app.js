import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Routes from './containers/Routes';
import reducers from './reducers';

injectTapEventPlugin();
const store = createStore(reducers);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Routes store={store}/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
