import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore ,compose ,applyMiddleware} from 'redux';
import index from './reducer/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(
    index,
    compose(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
    );

