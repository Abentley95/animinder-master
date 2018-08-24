import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/users';
import SignupForm from '../forms/SignupForm';
import { CenteredContainer } from '../styles/Containers';

const SignupPageContainer = CenteredContainer.extend `
    height: 400px;
    width: 300px;
    align-items: flex-start;
`;

class SignupPage extends React.Component {
    state={}

    submit = (data) => this.props.signup(data).then(()=> this.props.history.push("/dashboard"));
    
    render () {
        return (
            <SignupPageContainer>
                <SignupForm submit={this.submit}/>
            </SignupPageContainer>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, { signup })(SignupPage);