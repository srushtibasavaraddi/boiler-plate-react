import React from "react";
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';  
import Home from '../components/home';
import FourO from '../components/notFound';
import Registration from '../components/registration';
import Admin from '../components/admin';
import Login from '../components/login';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import ImageUpload from "../components/imageUpload";
import Gallery from "../components/gallery";
import NewsUpload from '../components/newsUpload';
import DownloadsUpload from '../components/downloadsUpload';
import Downloads from '../components/downloads';

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <PublicRoute path="/" component={Home} exact={true}/>
                <PublicRoute path="/registration" component={Registration}/>
                <PublicRoute path="/downloads" component={Downloads}/>
                <PublicRoute path="/gallery" component={Gallery}/>
                <PrivateRoute path="/admin" component={Admin}/>
                <PrivateRoute path="/imageUpload" component={ImageUpload}/>
                <PrivateRoute path="/newsUpload" component={NewsUpload}/>
                <PrivateRoute path="/downloadsUpload" component={DownloadsUpload}/>
                <PublicRoute path="/login" component={Login}/>
                <PublicRoute component={FourO}/>        
            </Switch>
        </div> 
    </BrowserRouter>
);

export default AppRouter;