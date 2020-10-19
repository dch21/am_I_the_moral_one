import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import NavBar from './nav-bar/nav_bar_container'
import LoginFormContainer from './session/login_form_container'; 
import SignInContainer from './session/signup_form_container'; 
import Splash from './splash/splash';
import NewQuizzes from './quizzes/quizzes';
import CreateQuiz from './quizzes/create_quiz_container' //this is a form that makes all 10 questions for a complete questionnaire
import Homepage from './homepage/homepage';
import '../App.css';
import ResultsPage from "./results/results_container"






const App = () => (
    <div>
        <NavBar/> 
        <ProtectedRoute exact path="/results/" component={ResultsPage} />
        <Switch>
            {/* <Route exact path="/results/:resultsId" component={ResultsPage} /> */}
            <AuthRoute exact path="/signup" component={SignInContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute exact path="/createquiz" component={CreateQuiz} /> 
            <ProtectedRoute exact path="/homepage" component={Homepage} />
            <ProtectedRoute exact path="/quizzes" component={NewQuizzes} />
        </Switch>
    </div>
)
export default App;