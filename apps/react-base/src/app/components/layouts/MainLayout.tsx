import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../pages/Login';
import { ConnectedLogout } from '../pages/Logout';
import { SignUp } from '../pages/Signup';

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
        <nav style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: 'gray', width: '100%' }}>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/users/">Users</Link>
            <Link to="/login/">Login</Link>
            <Link to="/logout/">Logout</Link>
            <Link to="/signup/">Signup</Link>
        </nav>
        <div style={{ display: 'flex', flexFlow: 'column', flex: '1', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'lightgray' }}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/login/" component={Login} />
          <Route path="/logout/" component={ConnectedLogout} />
          <Route path="/signup/" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}
