import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter >
        <Routes />
    </BrowserRouter >
    , document.getElementById('root'));
registerServiceWorker();
