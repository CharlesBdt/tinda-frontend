import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from 'utils/auth';

import Header from 'components/Header';
import TinderCards from 'components/TinderCards';
import SwipeButtons from 'components/SwipeButtons';
import Profile from 'pages/Profile';
import Messages from 'pages/Messages';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={(TinderCards, SwipeButtons)} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
