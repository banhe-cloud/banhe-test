import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Edit from './edit'
import First from './first'
import Add from './add'
import Detail from './detail'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  IndexRoute,
  withRouter
} from 'react-router-dom';

ReactDOM.render(
  <div>

    <Router>
      <App />
      <Switch>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/edit' component={Edit}></Route>
        <Route path='/add' component={Add}></Route>
        <Route path='/*' component={First}></Route>
      </Switch>
    </Router>
  </div>
  ,
  document.getElementById('root')
);



console.log("banben", React.version)

