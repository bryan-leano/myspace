import React from 'react';
import Home from './Home';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import FetchUser from './FetchUser';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';

const App = () => (
    <div>
        <NavBar />
        <FetchUser>
            <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NoMatch} />

            </Switch>
        </FetchUser>
    </div>
)

export default App;