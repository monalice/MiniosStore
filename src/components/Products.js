import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ProductContext from '../contexts/ProductContext';

export default function Products() {
    const { products } = useContext(ProductContext);

    return (
        <Container id="products">
            <h2>PRODUCTS</h2>
            <p>Select your favorites</p>
            <Minions>
            {products.length !== 0
                ? products.map((p) => <Card p={p} key={p.id} />)
                : "carregando"
            }
            </Minions>
        </Container>
    ); 
}

const Container = styled.section `
    width: 100%;
    padding: 30px 0;
    text-align: center;
    font-family: 'Righteous', cursive;

    h2 {
        font-size: 60px;
        color: #F9CF00;
    }
    & > p {
        margin: 20px 0;
        font-size: 28px;
        color: #FFFF66;
    }
`;

const Minions = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px 15%;
    width: 70%;
    font-family: 'Roboto', sans-serif;
    cursor: pointer
`;