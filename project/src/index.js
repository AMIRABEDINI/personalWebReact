import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom'
import App from './App';
import Login from './components/login';
import NotFound from './components/notFound';
import Dashbord from './components/admin/dashbord';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './css/index.css';
import './css/navbar.css';
import './css/sidebar.css';
import './css/login.css';
import './css/404.css';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
           <Route path="/login" component={Login}/>
           <Route path="/not-found" component={NotFound}/>
           <Route path="/admin" component={Dashbord}/>
           <Route path="/" component={App}/>
           <Redirect to="/not-found"/>
        </Switch>  

    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
