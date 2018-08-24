import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { connect }  from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { CenteredContainer } from '../styles/Containers';
import { searchAnime } from '../../actions/jikan';

const DashboardPageContainer = CenteredContainer.extend `
    width: 400px;
    height: 200px;
`;

const SearchBox = styled.input `
    width: 100%;
    height: 36px;
    text-align: center;
`;

const Header = styled.h1 `

`;

const Note = styled.p `

`;

class DashboardPage extends React.Component {
    constructor (props){
        super(props);
        this.state={
            searched: null,
        }

        this.submitSearch = this.submitSearch.bind(this);
      }
    onChange = (e) => {
        const q = e.target.value;
        this.setState({searched: q});
    }

    submitSearch(e){
        if(e.key === 'Enter') {
            this.props.searchAnime(this.state.searched);
        }
    }
    
    render() {
    const { isConfirmed } = this.props;

    return (
        <div>
            {isConfirmed && ( 
                <div>
                    <Header>Your favorited animes</Header>
                    <DashboardPageContainer>
                        <SearchBox onKeyDown={this.submitSearch} onChange={this.onChange} placeholder="Search for anime"/>
                        <Link to='/reminder'>to watch list</Link>
                        <Note>note: possible make bar graph of users prefrenced type. ScrollX on results then when clicked display below</Note>
                    </DashboardPageContainer>
                </div>
            )}
            {!isConfirmed && (
                <ConfirmEmailMessage />
            )}
        </div>
    )}
};

DashboardPage.propTypes = { 
    isConfirmed: Proptypes.bool.isRequired,
    searchAnime: Proptypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps, {searchAnime})(DashboardPage); 