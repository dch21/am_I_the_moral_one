import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBar from './nav-bar/nav_bar_container'
import LoginFormContainer from './session/login_form_container'; 
import SignInContainer from './session/signup_form_container'; 
import Splash from './splash/splash';
import QuizForm from '../components/quiz_form/quiz_form'; 
import NewQuizzes from './quizzes/quizzes';
import Homepage from './homepage/homepage';
import '../App.css';
const express = require("express");
const app = express();





const App = () => (
    <div>
        <NavBar/> 
        <Switch>
            <AuthRoute exact path="/signup" component={SignInContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute exact path="/" component={Homepage} />
            <ProtectedRoute exact path="/quizzes" component={NewQuizzes} />

        </Switch>
    </div>
);

export default App;