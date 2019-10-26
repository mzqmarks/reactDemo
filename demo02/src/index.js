import React from 'react';
import ReactDOM from 'react-dom';
import ToduList from './ToduList';
import {Provider} from 'react-redux'
import store from './store'

const App = (
    <Provider store={store}>
        <ToduList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

