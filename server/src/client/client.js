import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';


// Using hydrate instead of render because we are rerendering the html.
ReactDOM.hydrate (
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  , document.getElementById('root')
 );
