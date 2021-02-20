import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Edit from './edit'
import First from './first'
import Add from './add'

import {
  HashRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Router>
        <Route path='/' component={First}></Route>
        <Route path='/edit' component={Edit}></Route>
        <Route path='/add' component={Add}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

