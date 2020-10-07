import React from 'react'; 
import './quiz_form.css'; 

class QuizForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value 
        })
    }


    handleSubmit(e){
        e.preventDefault(); 
        let response = {
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5,
            q6: this.state.q6,
            q7: this.state.q7,
            q8: this.state.q8,
            q9: this.state.q9,
            q10: this.state.q10
        }

        this.props.action(response); 
    }

    render(){
    
        const quizzes = {
        1: {
            title: 'QUIZ 1',
            id: 1, 
            q1: {
                id: 'q1', 
                text: 'There is a runaway trolley barreling down the railway tracks.Ahead, on the tracks, there are five people tied up and unable to move.The trolley is headed straight for them.You are standing some distance off in the train yard, next to a lever.If you pull this lever, the trolley will switch to a different set of tracks.However, you notice that there is one person on the side track.You have two options. Do nothing and allow the trolley to kill the five people on the main track.Pull the lever, diverting the trolley onto the side track where it will kill one person.Which is the more ethical option? Or, more simply: What is the right thing to do?'

            },
            q2: {
                id: 'q2', 
                text: 'Julie and Mark are brother and sister. They are traveling together in France on summer vacation from college. One night, they are staying alone in a cabin near the beach. They decide that it would be interesting and fun if they tried making love. At the very least it would be a new experience for each of them. Julie was already taking birth control pills, but Mark uses a condom too, just to be safe. They both enjoy making love, but they decide not to do it again. They keep that night as a special secret, which makes them feel even closer to each other. What do you think about that? Was it okay for them to make love?'
            },
            q3: {
                id: 'q3', 
                text: 'Ticking Bomb: a terrorist has hidden a bomb that will kill thousands of people if set off; are we morally permitted to torture her given that we know that only in this way we will learn how to defuse the bomb? '
            },
            q4: {
                id: 'q4', 
                text: 'You wake up in a plain white room. You are seated in a reclining chair with a steel contraption on your head. A woman in a white coat is standing over you. The year is 2659,  she explains, The life with which you are familiar is an experience machine program selected by you some forty years ago.We at IEM interrupt our clients programs at ten-year intervals to ensure client satisfaction. Our records indicate that at your three previous interruptions you deemed your program satisfactory and chose to continue. As before, if you choose to continue with your program you will return to your life as you know it with no recollection of this interruption. Your friends, loved ones, and projects will all be there. Of course, you may choose to terminate your program at this point if you are unsatisfied for any reason. Do you intend to continue with your program?'
            },
            q5: {
                id: 'q5', 
                text: 'A man goes to the supermarket once a week and buys a chicken. But before cooking the chicken, he has sexual intercourse with it. Then he cooks it and eats it. Was this all right for him to do?'
            },
            q6: {
                id: 'q6', 
                text: 'Imagine a machine that could give us whatever desirable or pleasurable experiences we could want. Psychologists have figured out a way to stimulate a persons brain to induce pleasurable experiences that the subject could not distinguish from those he would have apart from the machine.If you could choose between a life spent using the machine, and one spent living normal life, which would you choose? '
            },
            q7: {
                id: 'q7', 
                text: 'A brilliant transplant surgeon has five patients, each in need of a different organ, each of whom will die without that organ. Unfortunately, there are no organs available to perform any of these five transplant operations. A healthy young traveler, just passing through the city the doctor works in, comes in for a routine checkup. In the course of doing the checkup, the doctor discovers that his organs are compatible with all five of his dying patients. Suppose further that if the young man were to disappear, no one would suspect the doctor. Do you support the morality of the doctor to kill that tourist and provide his healthy organs to those five dying people and save their lives?'
            },
            q8: {
                id: 'q8', 
                text: 'You wake up in the morning and find yourself back to back in bed with an unconscious violinist. A famous unconscious violinist. He has been found to have a fatal kidney ailment, and the Society of Music Lovers has canvassed all the available medical records and found that you alone have the right blood type to help. They have therefore kidnapped you, and last night the violinists circulatory system was plugged into yours, so that your kidneys can be used to extract poisons from his blood as well as your own.If he is unplugged from you now, he will die; but in nine months he will have recovered from his ailment, and can safely be unplugged from you.Are you obligated to keep the musician alive, or do you cut him loose and let him die because you want to?'
            },
            q9: {
                id: 'q9', 
                text: 'Alma runs Chef in Shackles, a restaurant at which the chef is known to be held against his will. It’s a vanity project, and Alma will run the restaurant regardless of how many people come. In fact, Alma just burns the money that comes in. The enslaved chef is superb; the food is delicious. Is it morally appropriate to go to Chef in Shackles? '
            },
            q10: {
                id: 'q10', 
                text: 'A man wearing a thousand dollar suit sees a child drowning in the ocean and being pulled away by the currents.  He doesnt have time to take off his suit and save the child.Is the man morally obligated to jump in the ocean and ruin his suit to save the drowning child?'
            }
            
        },

        2: {
            title: 'QUIZ 2',
            id: 2, 
            q1: {
                id: 'q1',
                text: 'There is a runaway trolley barreling down the railway tracks.Ahead, on the tracks, there are five people tied up and unable to move.The trolley is headed straight for them.You are standing some distance off in the train yard, next to a lever.If you pull this lever, the trolley will switch to a different set of tracks.However, you notice that there is one person on the side track.You have two options. Do nothing and allow the trolley to kill the five people on the main track.Pull the lever, diverting the trolley onto the side track where it will kill one person.Which is the more ethical option? Or, more simply: What is the right thing to do?'

            },
            q2: {
                id: 'q2',
                text: 'Julie and Mark are brother and sister. They are traveling together in France on summer vacation from college. One night, they are staying alone in a cabin near the beach. They decide that it would be interesting and fun if they tried making love. At the very least it would be a new experience for each of them. Julie was already taking birth control pills, but Mark uses a condom too, just to be safe. They both enjoy making love, but they decide not to do it again. They keep that night as a special secret, which makes them feel even closer to each other. What do you think about that? Was it okay for them to make love?'
            },
            q3: {
                id: 'q3',
                text: 'Ticking Bomb: a terrorist has hidden a bomb that will kill thousands of people if set off; are we morally permitted to torture her given that we know that only in this way we will learn how to defuse the bomb? '
            }
        },

        3: {
            title: 'QUIZ 3',
            id: 3,
            q1: {
                id: 'q1',
                text: 'There is a runaway trolley barreling down the railway tracks.Ahead, on the tracks, there are five people tied up and unable to move.The trolley is headed straight for them.You are standing some distance off in the train yard, next to a lever.If you pull this lever, the trolley will switch to a different set of tracks.However, you notice that there is one person on the side track.You have two options. Do nothing and allow the trolley to kill the five people on the main track.Pull the lever, diverting the trolley onto the side track where it will kill one person.Which is the more ethical option? Or, more simply: What is the right thing to do?'

            },
            q2: {
                id: 'q2',
                text: 'Julie and Mark are brother and sister. They are traveling together in France on summer vacation from college. One night, they are staying alone in a cabin near the beach. They decide that it would be interesting and fun if they tried making love. At the very least it would be a new experience for each of them. Julie was already taking birth control pills, but Mark uses a condom too, just to be safe. They both enjoy making love, but they decide not to do it again. They keep that night as a special secret, which makes them feel even closer to each other. What do you think about that? Was it okay for them to make love?'
            },
            q3: {
                id: 'q3',
                text: 'Ticking Bomb: a terrorist has hidden a bomb that will kill thousands of people if set off; are we morally permitted to torture her given that we know that only in this way we will learn how to defuse the bomb? '
            }
        }
    }

        const quiz = quizzes[this.props.quiz]
        const theRealQuiz = Object.values(quiz).slice(2); 
        const questions = theRealQuiz.map(q => {
            
            return (
            <div className="quiz-div">
                    <div>{q.text}</div>
            <br></br>
            <label> Yes 
                <input type="radio"
                    name={q.id}
                    id="answerChoiceA"
                    value="answerChoiceA"
                    onChange={this.update(`${q.id}`)}
                >
                </input>
            </label>
            <label> No 
                <input type="radio"
                    name={q.id}
                    id="answerChoiceB"
                    value="answerChoiceB"
                    onChange={this.update(`${q.id}`)}
                >
                </input>
             </label>
            
            <br></br>
            </div>
        )})

return(
    <div className="quiz-outer-div">
        <form>
            {quiz.title}
            {questions}
            <button type='submit'>Submit</button>
        </form>
    </div>


)
        
    }

}

export default QuizForm; 