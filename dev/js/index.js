import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/app';

//main application storage
const store = createStore(allReducers);

ReactDOM.render(
    // <h2>Hey Now</h2>,
    // <App />,
    // Provider: make the data accessable
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
