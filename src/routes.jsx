import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import App from './App';
import Feed from './components/feedComponent';
import Card from './components/myFirstComponent';
import Auth from './utils/AuthService';
import Authed from './components/Authed';
import Callback from './components/Callback';
import Hello from './components/Hello';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/authed" render={(props) => (!auth.isAuthenticated() ? ( <Redirect to="/feed"/> ): (<Authed auth={auth} {...props} />))} />
            <Route exact path="/callback"  render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
            }}/>
            <Route exact path="/hello/:name" component={Hello} />
        </Switch>
    </App>   
)

export default Routes