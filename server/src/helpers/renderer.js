import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req,store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

//set server side redux store to window initiate state so when redux rehydrate the dry template it contain the same store as server redux store.

  return `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
}
