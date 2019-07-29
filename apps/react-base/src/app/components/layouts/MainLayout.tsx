import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../pages/Login';
import { ConnectedNavigation } from '../units/Navigation';
import { ConnectedLogout } from '../pages/Logout';
import { ConnectedReduxStore } from '../units/ReduxStore';
import { ConnectedSignup } from '../pages/Signup';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Router>
        <ConnectedNavigation/>
        <div style={{ display: 'flex', flexFlow: 'column', flex: '1', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'lightgray' }}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/login/" component={Login} />
          <Route path="/logout/" component={ConnectedLogout} />
          <Route path="/signup/" component={ConnectedSignup} />
        </div>
      </Router>
      <ConnectedReduxStore />
    </div>
  );
}
