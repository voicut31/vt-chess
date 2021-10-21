import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Vtchess from './vtchess/vtchess';
import PlayWithComputer from './vtchess/playwithcomputer';
import PlayWithFriend from './vtchess/playwithfriend';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/contact'}>
          <Contact />
        </Route>
        <Route path='/play-with-friend' component={PlayWithFriend} />
        <Route path='/play-with-computer' component={PlayWithComputer} />
        <Route path={'/'}>
          <Vtchess />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
