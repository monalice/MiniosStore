import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import List from './List';

export default function MinionList() {

    return(
        <>
            <Container id="minionsListPage">
                <h2>YOUR MINION LIST</h2>
                <article>
                    <Form />
                    <List />
                </article>
            </Container>
        </>
    );
}

const Container = styled.section `
    height: 930px;
    width: 100%;
    padding-bottom: 30px;
    text-align: center;
    color: #FFF;
    background-image: url('../images/backYourList.jpg');
    background-size: 1500px;

    & > h2 {
        font-size: 80px;
        padding: 20px 0;
        font-family: 'Big Shoulders Stencil Display', cursive;
    }

    & > article {
        display: flex;
        justify-content: space-around;
        margin: 10px;
    }

    @media(max-width: 600px) {
        height: auto;
        article {
            display: block;

        }
    }
`;