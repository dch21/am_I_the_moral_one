import React from 'react'; 
import {Link} from 'react-router-dom'

class QuizIndex extends React.Component {
    constructor(props){
        super(props); 
        this.specialNumberOfQuizzesVariable = 5; 

        this.firsts = []
    }
   
    componentDidMount(){
      this.props.fetchTotalNumberOfQuizzes();
        
        console.log(this.props.total)
    }
  
    generateLinks(){
        let array = [];
        for(let i = 1; i < this.props.total + 1; i++){
            array.push(
                <div>
                    <Link to={`/quizzes/${i}`}>{'Quiz' + `${i}`}</Link>
                    <h1>{this.props.firstQuestion[i - 1]}</h1>
                </div>
            )
            
        }
        return array; 
    }
 

    render(){
        // debugger
        if(!this.props.total) return null; 
        if (this.firsts.length === 0) {
            for (let i = 1; i < this.props.total + 1; i++) {
                // this.props.fetchFirstQuestion(i);
                this.firsts.push(this.props.fetchFirstQuestion(i))
            }
            console.log(this.firsts)
        }       
       
        let links = this.generateLinks(); 
        return(
        
        <div className="quiz-index">
            {links.map(link => {
                return link 
            })}
        </div>

        )
    }
}

export default QuizIndex; 