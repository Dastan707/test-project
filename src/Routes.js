import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';


const Routes = () => {
    return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/register' component={Register} />
            </Switch>
            </Router>
        </div>
    )
}

export default Routes;