/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Span = styled.span `
    color: #ae5856;
`;

const InlineError = ({ text }) => ( 
    <Span>
        {text}
    </Span>
)

InlineError.proptypes = {
    text: Proptypes.string.isRequired
};

export default InlineError