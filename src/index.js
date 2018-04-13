import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const element = <App/>;
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
