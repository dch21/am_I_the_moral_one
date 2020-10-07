import React from "react";
import homepageCSS from './homepage.scss'

class Homepage extends React.Component {

    render() {
        return (
            <div className="splash-div">
                <div className="quizzes-taken-directory">
                    <h1 className="quizzes-taken-header">Quizzes taken:</h1>
                    <div className="quizzes-taken-links">
                        <div>Quiz Title 1</div>
                        <div>Quiz Title 2</div>
                        <div>Quiz Title 3</div>
                        <div>Quiz Title 4</div>
                        <div>Quiz Title 5</div>
                        <div>Quiz Title 6</div>
                        <div>Quiz Title 7</div>
                        <div>Quiz Title 8</div>
                        <div>Quiz Title 9</div>
                        <div>Quiz Title 10</div>
                        <div>Quiz Title 11</div>
                        <div>Quiz Title 12</div>
                        <div>Quiz Title 13</div>
                        <div>Quiz Title 14</div>
                        <div>Quiz Title 15</div>
                        <div>Quiz Title 16</div>
                        <div>Quiz Title 17</div>
                    </div>
                </div>

                <div className="questions-answered-box">
                    <h1 className="questions-answered-header">(Selected Quiz):</h1>
                    <div className="questions-answered-list">
                        <div>Question 1</div>
                        <div>Question 2</div>
                        <div>Question 3</div>
                        <div>Question 4</div>
                        <div>Question 5</div>
                        <div>Question 6</div>
                        <div>Question 7</div>
                        <div>Question 8</div>
                        <div>Question 9</div>
                        <div>Question 10</div>
                        <div>Question 11</div>
                        <div>Question 12</div>
                        <div>Question 13</div>
                        <div>Question 14</div>
                        <div>Question 15</div>
                        <div>Question 16</div>
                        <div>Question 17</div>
                    </div>
                </div>
                <div className="main-data-div">
                    <h1 className="data-header">Data:</h1>
                    <div className="inner-data-box">

                    </div>
                </div>

            </div>
        );
    }
}

export default Homepage;