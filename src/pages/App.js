import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ProvideAuth, useAuth } from 'utils/auth';
import 'style/App.css';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Messages from 'pages/Messages';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/messages">
            <Messages />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
// eslint-disable-next-line react/prop-types
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
