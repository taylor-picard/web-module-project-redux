import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
