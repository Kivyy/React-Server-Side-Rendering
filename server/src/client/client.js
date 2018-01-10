import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import Routes from './Routes';
// node automatically find index as default. So we dont have to specific the file path
import reducers from './reducers'

const store = createStore(reducers, {} , applyMiddleware(thunk));


// Using hydrate instead of render because we are rerendering the html.
ReactDOM.hydrate (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
 );
