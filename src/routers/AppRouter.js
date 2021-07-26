import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/Login" component={ LoginScreen }>
                        </Route>
                        <Route path="/" component={ DashboardRoutes }>
                        </Route>
                    </Switch>
                </div>
            </Router> 
       
    )
}
