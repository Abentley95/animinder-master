import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HomePage = () =>  (
<div>
    <h1>HomePage</h1>
    <Link to="/login">Login</Link>
</div>
);

export default HomePage;