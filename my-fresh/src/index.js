import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './components/context/StateProvider';
import reducer from './components/context/reducer';
import { initialState } from './components/context/initalState';

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
        </StateProvider>
    </Router>,
    document.getElementById("root"));


