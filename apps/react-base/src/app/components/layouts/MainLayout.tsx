import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../modules/login/Login';
import { ConnectedNavigation } from '../units/Navigation';
import { ConnectedLogout } from '../pages/Logout';
import { ConnectedSignup } from '../pages/Signup';
import { ConnectedProfile } from '../pages/Profile';
import { ConnectedSelectionsLayout } from './SelectionsLayout';
import { Gateway } from '../pages/Gateway';

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
      <ConnectedSelectionsLayout />
      <Router>
        <ConnectedNavigation/>
        <div style={{ display: 'flex', flexFlow: 'column', flex: '1', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'lightgray' }}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/login/" component={Login} />
          <Route path="/profile/" component={ConnectedProfile} />
          <Route path="/logout/" component={ConnectedLogout} />
          <Route path="/signup/" component={ConnectedSignup} />
          <Route path="/gateway/" component={Gateway} />
        </div>
      </Router>
    </div>
  );
}
