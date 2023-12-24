import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ADTransac from './views/ad-transac'
import Appoint from './views/appoint'
import ADUpdates from './views/ad-updates'
import Home from './views/home'
import Page from './views/page'
import Dash from './views/dash'
import ADFiles from './views/ad-files'
import Balance from './views/balance'
import ADAppoint from './views/ad-appoint'
import Files from './views/files'
import ADClients from './views/ad-clients'
import LOGIN from './views/login'
import Profile from './views/profile'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ADTransac} exact path="/ad-transac" />
        <Route component={Appoint} exact path="/appoint" />
        <Route component={ADUpdates} exact path="/ad-updates" />
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={Dash} exact path="/dash" />
        <Route component={ADFiles} exact path="/ad-files" />
        <Route component={Balance} exact path="/balance" />
        <Route component={ADAppoint} exact path="/ad-appoint" />
        <Route component={Files} exact path="/files" />
        <Route component={ADClients} exact path="/ad-clients" />
        <Route component={LOGIN} exact path="/login" />
        <Route component={Profile} exact path="/profile" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
