import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// Using hydrate instead of render because we are rerendering the html.
ReactDOM.hydrate (<Home/>, document.getElementById('root'))
