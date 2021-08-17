import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './redux/store/store';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <HelmetProvider>
          <App /> 
        </HelmetProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);