import React from 'react'; 
import {Link} from 'react-router-dom'

class QuizIndex extends React.Component {
    constructor(props){
        super(props); 
        this.specialNumberOfQuizzesVariable = 5; 
    }
   
    componentDidMount(){
        
      this.props.fetchTotalNumberOfQuizzes()
    }
  
    generateLinks(){
        
        let array = []
        for(let i = 1; i < this.props.total + 1; i++){
      
                array.push(<Link to={`/quizzes/${i}`}>{'Quiz' + `${i}`}</Link>)
            
        }
        return array; 
    }
 

    render(){
        debugger
        if(!this.props.total) return null; 
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