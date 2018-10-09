import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './pages/App';

import registerServiceWorker from './registerServiceWorker';
import history from './utils/history';

import './styles/index.css';

const MainApp = (
  <Router history={history}>
    <App />
  </Router>
)

ReactDOM.render(
  MainApp,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
