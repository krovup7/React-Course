import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { asyncMiddleWare } from "./redux/middleware/middleware";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, asyncMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>{' '}
  </BrowserRouter>,
  document.getElementById('root')
);
