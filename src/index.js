import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const element = <BrowserRouter><App/></BrowserRouter>;
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
