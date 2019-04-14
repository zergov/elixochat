import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Socket } from 'phoenix'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import phoenixmiddleware from './socket-middleware.js'

import App from './App';
import './index.css';

const socket = new Socket('ws://localhost:4000/socket')
socket.connect()

const store = createStore(
  reducers,
  applyMiddleware(logger, phoenixmiddleware(socket))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
