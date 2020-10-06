import React from 'react';
import { AuthRoute, ProtectedRoute, Route } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBar from './nav-bar/nav_bar_container'
import LoginFormContainer from './session/login_form_container'; 
import SignInContainer from './session/signup_form_container'; 
import Splash from './splash/splash';
import NewQuizzes from './quizzes/quizzes'
import '../App.css';

const App = () => (
    <div>
        <NavBar/> 
        <Switch>
            <AuthRoute exact path="/signup" component={SignInContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/quizzes" component={NewQuizzes} />
        </Switch>
    </div>
);

export default App;