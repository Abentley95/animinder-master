import React from 'react';
import Proptypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'
/* eslint-disable */
class DescriptionCard extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            liked: false,
            seeDescription: false
        }
        this.likedClick = this.likedClick.bind(this);
    }

    style = {
        margin: '0 auto',
        width: '90%'
    }

    imageStyle = {
        height: '317px',
        width: '225px'
    }

    cardContent = {
        display: 'flex'
    }

    likedClick(){
        this.setState({ liked: !this.state.liked});
    }

    liked = {
        color: '#f44242'
    }

    render () {
        const { image_url, title, episodes, synopsis, type, score } = this.props.data;
        return (
            <div>
                <Card style={this.style}>
                    <Card.Content style={this.cardContent}>
                        <Image floated='left' style={this.imageStyle} src={image_url} />
                        <div>
                            <Card.Header>{title}</Card.Header>
                            <Card.Meta> episodes: {episodes}</Card.Meta>
                            <a>
                            {this.state.liked && <Icon onClick={this.likedClick} style={this.liked} name='heart' />}
                            {!this.state.liked && <Icon onClick={this.likedClick} name='heart outline' />}
                            </a>
                            <Card.Meta> Type: {type}</Card.Meta>
                            <Card.Meta> Score: {score}</Card.Meta>
                        </div>
                        <Card.Description>{synopsis}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}


DescriptionCard.propTypes = { 
    data: Proptypes.shape({
        type: Proptypes.string.isRequired,
        score: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        image_url: Proptypes.string.isRequired,
        synopsis: Proptypes.string.isRequired,
        episodes: Proptypes.number.isRequired,
    }).isRequired,
}

export default DescriptionCard