import React from "react";
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';  
import Dash from '../components/dashboard';
import FourO from '../components/notFound';
import Login from '../components/login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export const history =createHistory();
const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true}/>
                <PrivateRoute path="/dashboard" component={Dash}/>
                <Route component={FourO}/>        
            </Switch>
        </div> 
    </Router>
);

export default AppRouter;