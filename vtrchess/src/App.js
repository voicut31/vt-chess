import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Vtchess from './vtchess/vtchess';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/contact'}>
          <Contact />
        </Route>
        <Route path={'/'}>
          <Vtchess />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
