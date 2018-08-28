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
        this.titleClick = this.titleClick.bind(this);
    }

    style = {
        margin: '5px',
        width: '90%'
    }

    imageStyle = {
        height: '317px',
        width: '225px'
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
        const { image_url, title, episodes, synopsis, type, score } = this.props.data;
        return (
            <div>
                <Card style={this.style}>
                    <Card.Content>
                        <Image  floated='left' style={this.imageStyle} src={image_url} />
                        <Card.Header onClick={this.titleClick}>{title}</Card.Header>
                        <Card.Meta> episodes: {episodes}</Card.Meta>
                        <a>
                        {this.state.liked && <Icon onClick={this.likedClick} style={this.liked} name='heart' />}
                        {!this.state.liked && <Icon onClick={this.likedClick} name='heart outline' />}
                        </a>
                        <Card.Meta> Type: {type}</Card.Meta>
                        <Card.Meta> Score: {score}</Card.Meta>
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