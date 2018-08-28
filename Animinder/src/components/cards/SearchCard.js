import React from 'react';
import Proptypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect }  from 'react-redux';
import { deepSearchAnime } from '../../actions/jikan';

class SearchCard extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            liked: false,
            seeDescription: false
        }
        this.likedClick = this.likedClick.bind(this);
        this.titleClick = this.titleClick.bind(this);
    }

    style = {
        margin: '5px',
    }

    imageStyle = {
        height: '140px',
        width: '100px'
    }

    likedClick(){
        this.setState({ liked: !this.state.liked});
    }

    titleClick(){
        this.props.deepSearchAnime(this.props.searchResult.malId);
    }

    liked = {
        color: '#f44242'
    }

    render () {
        const { src, title, episodes } = this.props.searchResult;
        return (
            <div>
                <Card style={this.style}>
                    <Card.Content>
                    <Image  floated='left' size='mini' style={this.imageStyle} src={src} />
                    <Card.Header onClick={this.titleClick}>{title}</Card.Header>
                    <Card.Meta> episodes: {episodes}</Card.Meta>
                    <a>
                    {this.state.liked && <Icon onClick={this.likedClick} style={this.liked} name='heart' />}
                    {!this.state.liked && <Icon onClick={this.likedClick} name='heart outline' />}
                    </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}


SearchCard.propTypes = { 
    deepSearchAnime: Proptypes.func.isRequired,
    searchResult: Proptypes.shape({
        src: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        episodes: Proptypes.number.isRequired,
        malId: Proptypes.number.isRequired,
    }).isRequired,
}

export default connect(null, { deepSearchAnime })(SearchCard)