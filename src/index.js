import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/store';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom'
import { history } from './utils/history';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'

import CustomMuiTheme from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={CustomMuiTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

