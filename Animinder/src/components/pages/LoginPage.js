import React from 'react';
import 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Link from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { CenteredContainer } from '../styles/Containers';
import { login } from '../../actions/auth';

// const LoginStyle = {
//     margin: "0 auto",
//     width: "50%",
//     marginTop: "30%"
// }

class LoginPage extends React.Component {
    state={}
    
    submit = (data) => this.props.login(data).then(()=> this.props.history.push("/dashboard"));

    render () {
        return (
            <CenteredContainer>
                <h1>Login</h1>
                <LoginForm submit={this.submit}/>

                <Link to="/forgot_password">Forgot Password</Link>
            </CenteredContainer>
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