import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../contexts/ProductContext';
import Item from './Item';

export default function List() {

    const { minionsList } = useContext(ProductContext);

    return(
        <SectionSelected>
            <h3>SELECTED</h3>
            {minionsList.map((m) => <Item img={m.imgSrc} name={m.name} key={m.id} />)}
        </SectionSelected>
    );
}

const SectionSelected = styled.div `
    width: 35%;
    box-shadow: 3px 3px 4px gray;
    padding: 10px 5px;
    font-weight: bold;

    & > h3 {
        font-size: 20px;
        font-family: 'Righteous', cursive;
        color: #874C62;
    }

    @media(max-width: 600px) {
        width: 95%;
    }
`;