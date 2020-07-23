import React from 'react';
import ReactDOM from 'react-dom';
import ImagesComponent from './components/images';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <App />
    </Provider>,
  document.querySelector('#root')
);

