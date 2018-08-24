import React from 'react';
import { Link } from "react-router-dom";


class ReminderPage extends React.Component {
    state={}
    
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

export default ReminderPage