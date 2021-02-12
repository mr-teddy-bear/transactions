import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import store from './store/configure';
import history from './store/history';
//import { ConnectedRouter as Router } from 'connected-react-router';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);