import React from 'react';
import Proptypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

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
        this.setState({ seeDescription: !this.state.seeDescription});
    }

    liked = {
        color: '#f44242'
    }

    render () {
        const { src, title, episodes, description, type, score } = this.props;
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
                    <Card.Content extra>
                    { this.state.seeDescription && (
                        <div>
                            <Card.Meta> Type: {type}</Card.Meta>
                            <Card.Meta> Score: {score}</Card.Meta>
                            <Card.Description>{description}</Card.Description>
                        </div>
                    )}
                    </Card.Content>
                </Card>
            </div>
        );
    }
}


SearchCard.propTypes = { 
    src: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    episodes: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    score: Proptypes.string.isRequired,
}

export default SearchCard