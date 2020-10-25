import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.scss';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            education: '',
            age: '',
            politicalLeaning: '',
            religiousAffilation: '',
            gender: '',
            location: '',
            petChoice: '',
            ethnicity: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            education: this.state.education,
            age: this.state.age,
            politicalLeaning: this.state.politicalLeaning,
            religiousAffilation: this.state.religiousAffilation,
            gender: this.state.gender, 
            location: this.state.location,
            petChoice: this.state.petChoice,
            ethnicity: this.state.ethnicity
        };

        
        this.props.signup(user, this.props.history).then(
             action =>{
            if(action.type !== 'RECEIVE_SESSION_ERRORS'){
             
            this.props.login(user)}}
            ); 
            
       
    }

    renderErrors() {
        return (
            <ul className='errors'>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        
                        <select defaultValue= "Education" name = 'education' placeholder="Highest Level of Education" onChange={this.update('education')}>
                            <option disabled>Education</option>
                            <option value="High-school-or-lower">Highschool or lower</option>
                            <option value="Undergraduate-degree">Undergraduate degree</option>
                            <option value= "Bootcamp" >Bootcamp</option>
                            <option value="Masters">Masters</option>
                            <option value="PHD">PHD</option>
                        </select>
                        
                        <select defaultValue="Age Range" name='age' onChange={this.update('age')}>
                            <option disabled>Age Range</option>

                            <option value="under-18">Under 18</option>
                            <option value="18-22">18 to 22</option>
                            <option value="23-40">22 to 40</option>
                            <option value="41-59">40 to 60</option>
                            <option value="60+">60 plus</option>
                        </select>

                        <select defaultValue="Political Leaning" name='politicalLeaning' onChange={this.update('politicalLeaning')}>
                            <option disabled>Political Leaning</option>
                            <option value="Lean-left">Lean Left</option>
                            <option value="Lean-Right">Lean Right</option>
                            <option value="Centrist">Centrist</option>
                            <option value="Libertarian">Libertarian</option>
                            <option value="Socialist">Socialist</option>
                            <option value="Anarchist">Anarchist</option>
                            <option value="Other">Other</option>
                        </select>

                        <select defaultValue="Religious Affilation"
                            onChange={this.update('religiousAffilation')}
                        >
                            <option disabled>Religious Affilation</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Islam">Islam</option>
                            <option value="Judaism">Judaism</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Buddahism">Buddhism</option>
                            <option value="Sikhism">Sikhism</option>
                            <option value="Agnostic">Agnostic</option>
                            <option value="Athiest">Atheism</option>
                            <option value="Prefer-Not-To-Self-Id">Prefer not to self id</option>
                        </select>

                        <select defaultValue="Gender"
                            onChange={this.update('gender')}
                        >
                            <option disabled>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-Binary">Non-Binary</option>
                            <option value="Other">Other</option>
                            <option value="Prefer-Not-To-Self-Id">Prefer not to self id</option>
                        </select>

                        <select defaultValue="Location"
                        onChange={this.update('location')}
                        >
                            <option disabled>Location</option>
                            <option value="Urban">Urban</option>
                            <option value="Suburban">Suburban</option>
                            <option value="Rural">Rural</option>
                        </select>

                        <select defaultValue="Pet Choice"
                            onChange={this.update('petChoice')}
                        >
                            <option disabled>Pet Choice </option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Fish">Fish</option>
                            <option value="Plant">Plant</option>
                        </select>

                        <select
                        onChange={this.update('ethnicity')} defaultValue="Ethnicity">
                            <option disabled >Ethnicity</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Hispanic">Hispanic</option>
                            <option value="East-Asian">East-Asian</option>
                            <option value="South-Asian">South-Asian</option>
                            <option value="Middle-Eastern">Middle-Eastern</option>
                            <option value="Multi-racial">Multi-racial</option>
                            <option value="Other">Other</option>
                        </select>
                        {this.renderErrors()}
                        <input type="submit" value="Submit" className="signup-submit"/>
                       
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);