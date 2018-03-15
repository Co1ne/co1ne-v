import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Welcome from './welcome/Welcome'


// function tick() {
//     const element = <App/>;
//     ReactDOM.render(element, document.getElementById('root'))
// }
ReactDOM.render(<Welcome/>, document.getElementById('root'));

// setInterval(tick, 1000);
registerServiceWorker();
