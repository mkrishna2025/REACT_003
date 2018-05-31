import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// for Testing
//import App from './AppSample';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


registerServiceWorker();
