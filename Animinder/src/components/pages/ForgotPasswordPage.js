import React from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { resetPasswordRequest } from '../../actions/auth';
import { CenteredContainer } from '../styles/Containers';

const ForgotPasswordContainer = CenteredContainer.extend `
    height: 400px;
    width: 300px;
`;


class ForgotPasswordPage extends React.Component {
    state={
        success: false
    }

    submit = data => 
        this.props
            .resetPasswordRequest(data)
            .then(() => this.setState({success: true}));

    
    render () {
        return (
            <ForgotPasswordContainer>
                {this.state.success ? (
                    <Message>Email has been sent</Message>
                ) : (
                    <ForgotPasswordForm submit={this.submit}/>
                )}
            </ForgotPasswordContainer>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
};



export default connect(null, { resetPasswordRequest } )(ForgotPasswordPage);