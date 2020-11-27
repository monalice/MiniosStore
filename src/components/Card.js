import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../contexts/ProductContext';

export default function Card(props) {
    const { selected } = useContext(ProductContext);

    const { imgSrc, name, description  } = props.p;

    return (
        <Minion 
            onClick={() => selected(props.p)} 
            className={props.p.selected ? "select" : "card"}
        >
            <img 
                src={imgSrc}/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Minion>
    )
};

const Minion = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        width: 200px;
        margin: 15px;
        border-radius: 50px;
    }

    & > div {
        width: 180px;
        color: rgb(156, 156, 156);
    }
    & > div > h3 {
        font-weight: bold;
        margin-bottom: 5px;
        color: rgb(99, 98, 98);
    }
`;
