import React from 'react';
import styled from 'styled-components';

export default function Apresentation() {

    return(
        <Topic id='home'>
            <h2>Here you can create your horde of Minions</h2>
        </Topic>
    );
}

const Topic = styled.section `
    height: 800px;
    width: 100%;
    padding-bottom: 30px;
    font-family: 'Big Shoulders Stencil Display', cursive;
    text-align: center;
    color: #ff6a5c;
    background-image: url('../images/apresentation.jpg');
    background-size: cover;

    h2 {
        font-size: 80px;
        font-weight: 400;
        padding-top: 120px;
    }
    h3 {
        font-weight: 400;
        margin-top: 275px;
        font-size: 30px;
        color: #1b7b34;
    }
`;