import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <Top>
            <div>
                <h1>
                    <a href="#home">MINIONS STORE</a>
                </h1>
            </div>
            <nav>
                <a href="#products">
                    <h2>PRODUCTS</h2>
                </a>
                <a href="#minionsListPage">
                    <h2>YOUR MINION LIST</h2>
                </a>
            </nav>
        </Top>
    );
}

const Top = styled.header `

    background-color: rgba(255, 255, 0, 0.753);
    height: 70px;
    width: 100%;
    box-shadow: 0px 1px 5px gray;
    position: fixed;
    top: 0px;
    left: 0px;
    font-family: 'Righteous', cursive;
    display: flex;
    justify-content: space-between;

    div {
        margin: 15px 25px;
        font-size: 34px;
        color: #fff;
    }
    
    nav {
        margin: 25px 20px;
        display: flex;
        justify-content: space-between;
    }
    a {
        color: #fff;
        margin: 0 10px;
    }

    @media(max-width: 600px) {
        justify-content: center;
        nav {
            display: none;
        }
    }
`;