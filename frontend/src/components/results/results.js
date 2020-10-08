import React from "react";
import '../homepage/homepage.scss'
import MainPieChart from '../homepage/piechart_container'
// import DataVis from './data_vis'; 

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questionNumber: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(field) {
        
        // field.preventDefault()
        this.setState({
            questionNumber: field
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="splash-div">
                <div className="quizzes-taken-directory">
                    <h1 className="quizzes-taken-header">Questions</h1>
                    <div className="quizzes-taken-links">
                        <div onClick={() => this.handleClick(1)}>1</div>
                        <div onClick={() => this.handleClick(2)}>2</div>
                        <div onClick={() => this.handleClick(3)}>3</div>
                        <div onClick={() => this.handleClick(4)}>4</div>
                        <div onClick={() => this.handleClick(5)}>5</div>
                        <div onClick={() => this.handleClick(6)}>6</div>
                        <div onClick={() => this.handleClick(7)}>7</div>
                        <div onClick={() => this.handleClick(8)}>8</div>
                        <div onClick={() => this.handleClick(9)}>9</div>
                        <div onClick={() => this.handleClick(10)}>10</div>
                    </div>
                </div>
               
                <div className="main-data-div">
                    <h1 className="data-header">Data:</h1>
                    <div className="inner-data-box">
                        <MainPieChart questionNumber={this.state.questionNumber} />
                    </div>
                </div>

            </div>
        );
    }
}

export default ResultsPage;