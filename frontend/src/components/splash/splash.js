import React from "react";
import hands from '../images/hands.jpg'
import splashCSS from './spash.css'

class Splash extends React.Component {

    render() {
        return (
            <div className="logged-out-splash-div">
            <div className="logged-out-splash-content">
                {/* <img className="hands-img" src={hands}></img> */}
                Discover your moral views. See how they compare to others.
            </div>
            </div>
        );
    }
}

export default Splash;