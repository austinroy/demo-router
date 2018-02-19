import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Feed from './components/feedComponent';
import Card from './components/myFirstComponent';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/card" component={Card} />
        </Switch>
    </App>   
)

export default Routes