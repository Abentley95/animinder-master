import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { connect }  from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { CenteredContainer } from '../styles/Containers';
import { searchAnime } from '../../actions/jikan';
import SearchCard from '../cards/SearchCard';
import DescriptionCard from '../cards/DescriptionCard';

const DashboardPageContainer = CenteredContainer.extend `
    width: 400px;
    height: 150px;
    top: 20%;
`;

const SearchBox = styled.input `
    width: 100%;
    height: 36px;
    text-align: center;
`;

const CardContainer = styled.div `
    margin-top: 31%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
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
            listOfCards: null,
            searchResult: null,
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
    
    loopThroughResults() {
        return this.props.searchResults.map(element => {
            const searchResult = {
                src: element.image_url,
                title: element.title,
                episodes: element.episodes,
                description: element.description,
                score: element.score,
                type: element.type,
                malId: element.mal_id
            }
            return <SearchCard searchResult={searchResult} key={element.mal_id}/>
        });
    }

    render() {
    const { isConfirmed, searched, clickedAnime } = this.props;

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
                    <CardContainer>
                        {
                            searched && this.loopThroughResults()
                        }
                    </ CardContainer>
                        {
                            clickedAnime && <DescriptionCard data={clickedAnime}/>
                        }
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
    searched: Proptypes.bool.isRequired,
    clickedAnime: Proptypes.shape({}).isRequired,
    searchAnime: Proptypes.func.isRequired,
    searchResults: Proptypes.objectOf(Proptypes.array).isRequired
}

function mapStateToProps(state) {
    return {
        searched: !!state.search[0],
        searchResults: state.search,
        isConfirmed: !!state.user.confirmed,
        clickedAnime: state.search.data,
    }
}

export default connect(mapStateToProps, { searchAnime })(DashboardPage); 