import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.component';
import DetailClass from './components/DetailClass';
import StudentAddForm from './components/StudentAddForm';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/students">Ajouter un écolier</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/classes/:id" component={DetailClass} />
            <Route exact path="/students" component={StudentAddForm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
