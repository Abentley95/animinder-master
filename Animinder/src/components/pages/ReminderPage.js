import React from 'react';
import Proptypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect }  from 'react-redux';
import { allLikedAnime } from '../../actions/users';
import { stat } from 'fs';



class ReminderPage extends React.Component {
    // constructor (props){
    //     super(props);
    //     // state={

    //     // }
    //     // this.loopThroughResults = this.loopThroughResults.bind(this);
    // }
    
    componentDidMount() {
        this.props.allLikedAnime(this.props.userEmail);
    }

    // loopThroughResults() {

    // }

    render () {
        return (
            <div>
                <h1>anime you wanted to watch</h1>
                <p>rank 1 through 10 how much you want to watch it</p>
                <p>description</p>
                <p>cover</p>
                <Link to='/dashboard'>dashboard</Link>
            </div>
        );
    }
}

ReminderPage.propTypes = { 
    allLikedAnime: Proptypes.func.isRequired,
    userEmail: Proptypes.string.isRequired,
}

function mapStateToProps(state) {
    console.log('llllllllll', state);
    return {
        likedAnime: state.user.likedAnime,
        userEmail: state.user.email,
    }
}

export default connect(mapStateToProps, { allLikedAnime })(ReminderPage);