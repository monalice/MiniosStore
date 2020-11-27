import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../contexts/ProductContext';

export default function Item(props) {
    const { name, img } = props;

    return(
        <Container>
            <img src={img} />
            <span>{name}</span>
        </Container>
    )
};

const Container = styled.div `
    text-align: left;
    padding: 10px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #C98474;

    & > img {
        width: 100px;
        border-radius: 10px;
        margin-right: 15px;
    }
`;