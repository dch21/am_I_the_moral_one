import React from 'react';
import { Link } from 'react-router-dom'
import './user_info.css'

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
       
    }


    render() {
        let user = this.props.currentUser
        return (

            <div>
                <div className="user-info-columns">
                    <div className="user-info-column">
                        <h1>User Info</h1>
                        <div className="inside-user-column">
                            <div>Email: {user.email}</div>
                            <div>Education: {user.education}</div>
                            <div>Ethnicity: {user.ethnicity}</div>
                            <div>Location: {user.location}</div>
                            <div>Pet Choice: {user.petChoice}</div>
                            <div>Political Leaning: {user.politicalLeaning}</div>
                            <div>Religious Affiliation: {user.religiousAffiliation}</div>
                        </div>
                    </div>
                    <div className="user-info-column">
                        <h1>Quizzes Taken</h1>
                        <div className="inside-user-column">
                            something
                        </div>
                    </div>
                    <div className="user-info-column">
                        <h1>Quizzes Submitted</h1>
                        <div className="inside-user-column">
                            something
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserInfo; 