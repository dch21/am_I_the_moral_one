import React from 'react';
import { Link } from 'react-router-dom'
import { fetchUser } from '../../actions/session_actions';
import './user_info.css'
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';




class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
       this.props.fetchUser(this.props.email)
    }


    render() {
        if(!this.props.fetchedUser.answers) return null; 
        let user = this.props.fetchedUser; 
        let utilitarian = 0
        let kant = 0
        let nothing = 0
        user.answers[0].split(" ").forEach(( ans, i) => {
            if (i === 7 || i == 9 ) {
                nothing += 1; 
            }
            if (ans === "choiceA") {
                utilitarian += 1
            } else {
                kant += 1
            }
        })

                
        
        let personality = utilitarian > kant ? 
        <div>
                < p > 
                    Based on your answers to the first quiz, we think your moral views are largely consequentialist.
                    Consequentialists judge the morality of an action based on the consequences of that action. 
                    In contrast, Kantians care about whether an action is moral in and of itself, outside of its actual effects. 
                    A consequentialist would approve of telling a lie for the greater good, a Kantian would not. 
                     
                        </p > 
            </div>
                        : 
                    <div >    
                        < p > 
                    Based on you answers to the first quiz, we think your moral views are largely Kantian.
                    Kantians care about whether an action is moral in and of itself, outside of its actual effects. 
                    In contrast, Consequentialists judge the morality of an action based on the consequences of that action. 
                     A consequentialist would approve of telling a lie for the greater good, a Kantian would not. 
                        </p >

                    </div>


        if(utilitarian === 0 && kant === 0) personality = <div>Take the first Quiz to see your results!</div>

        let philosopherPic = utilitarian > kant ? 
            <div>
                <div className='space'></div>
                <div className='peter-div'></div>
                
                <p>Peter Singer is the most influential contemporary consequentialist.</p>
                <br></br>
                <Link className='peter-link' to='https://www.youtube.com/watch?v=Diuv3XZQXyc'>Peter's TED talk.</Link>
            </div>

            :

            <div>
                <div className='space'></div>
                <div className='christine-div'></div>
                <p>Christine Korsgaard is the most influential contemporary Kantian. </p>
                <Link className='peter-link' to='https://www.youtube.com/watch?v=i_3EgMcdxoQ'>Interview with Christine Korsgaard.</Link>
            </div>

        
        const demoGroup1A = utilitarian;
        const demoGroup1B = kant; 

        const data = [
            { name: 'Group A', value: demoGroup1A },
            { name: 'Group B', value: demoGroup1B },
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#bada55',  '#92A0F2'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
                cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={ x } y={y} fill="whit e "  textAnchor={x > cx ? 'start' : 'end'} dom i nantBasel ine="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        }



        return (

            <div>
                <div className="user-info-columns">
                    <div className="user-info-column">
                        <div className="inside-user-column">
                            <div>Your Info</div>
                            <div>Email: {user.email}</div>
                            <div>Education: {user.education}</div>
                            <div>Ethnicity: {user.ethnicity}</div>
                            <div>Location: {user.location}</div>
                            <div>Pet Choice: {user.petChoice}</div>
                            <div>Political Leaning: {user.politicalLeaning}</div>
                            <div>Religious Affiliation: {user.religiousAffilation}</div>
                            <div>Quizzes Taken: 
                                {user.takenQuizzes.map(quiz => {
                                    return <Link to={`results/${quiz}`}>{quiz} </Link>
                                })}
                            </div>
                            <div>Quizzes Created: 
                                {user.createdQuizzes.map(quiz => {
                                    return <Link to={`results/${quiz}`}>{quiz} </Link>
                                })}
                                
                                </div>
                        </div>
                    </div>

                    <div className="user-info-column">
                      
                        
                      
                        <div className="inside-user-column2">
                            {philosopherPic}
                        </div>
                    </div>

                    <div className='user-info-pie'>
                        <div></div>

                        <div className="legend">
                            <div className="choice-text-blue">Consequentialist Answers</div>
                            <div className="choice-text-green">Kantian Answers</div>
                        </div>
                        <PieChart width={200} height={200}>
                            <Pie
                                data={data}
                                cx={100}
                                cy={100}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                            </Pie>
                        </PieChart>
                        {personality}
                    </div>

                    
                  
                </div>
            </div>

        )
    }
}

export default UserInfo; 