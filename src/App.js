import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Spinner from './components/common/SpinnerPage';
import requireAuth from './utils/requireAuth';

const DashboardPage = lazy(() => import('./components/dashboard/DashboardPage'));
const EventPage = lazy(() => import('./components/dashboard/EventPage'));
const SigninPage = lazy(() => import('./components/signin/SigninPage') );
const SignupPage = lazy(()=> import('./components/signup/SignupPage'));


class App extends React.Component {

    render(){
        return(
            
                <Router history={history}>
                    <Suspense fallback={<Spinner/>}>
                      <Switch>
                        <Route exact path="/signin" component={SigninPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route exact path="/" component={DashboardPage} />
                        <Route exact path="/event" component={EventPage} />
                      </Switch>
                    </Suspense>
                </Router>
            
        );
    }
}

export default App;