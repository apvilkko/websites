import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {fetchData} from './data';

fetchData().then(() =>
  ReactDOM.render(<App />, document.getElementById('root')));

registerServiceWorker();
