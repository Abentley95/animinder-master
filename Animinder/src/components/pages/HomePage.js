import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';
import { CenteredContainer } from '../styles/Containers';


const HomePageContainer = CenteredContainer.extend `
    height: 400px;
    width: 300px;
`;
const Page = styled.h1 `
    flex: 0 1 auto;
`;
const Logout = styled.button `
    flex: 0 1 auto;
`;
const Login = styled.div `
    flex: 0 1 auto;
`;

const HomePage = ({ isAuthenticated, logout }) =>  (
    <HomePageContainer>
        <Page>HomePage</Page>
        { isAuthenticated 
        ? 
        <Logout onClick={() => logout() }>Logout</Logout> 
        : 
        <Login><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></Login>}
    </HomePageContainer>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps (state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);