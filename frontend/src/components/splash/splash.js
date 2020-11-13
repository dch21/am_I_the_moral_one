import React from "react";
import  './spash.css'

class Splash extends React.Component {

    render() {
        return (
            <div className="logged-out-splash-div">
             <div className="logged-out-splash-content">
            </div>
                <div className="landing-page-text">
                    <p className="ethics-definition">
                        Ethics: the principles that govern our behavior 
                    </p>
                    <br></br>
                    <p>
                        Take quizzes to test your moral beliefs
                    </p>
                    <br></br>
                    <p>
                        See how your answers compare to others across demographic groups 
                    </p>
                </div>
            </div>
        );
    }
}

export default Splash;