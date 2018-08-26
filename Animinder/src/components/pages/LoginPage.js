import React from 'react';
import 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Link from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { CenteredContainer } from '../styles/Containers';
import { login } from '../../actions/auth';


const LoginPageContainer = CenteredContainer.extend `
    height: 400px;
    width: 300px;
    align-items: flex-start;
`;

class LoginPage extends React.Component {
    state={}
    
    submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));

    render () {
        return (
            <LoginPageContainer>
                <h1>Login</h1>
                <LoginForm submit={this.submit}/>

                <Link to="/forgot_password">Forgot Password</Link>
            </LoginPageContainer>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);