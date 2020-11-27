import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../contexts/ProductContext';

export default function Form() {
    const { request, setName, setEmail, setPhone, setAddress, setCep } = useContext(ProductContext);

    return(
        <FormSection onSubmit={request} >
            <h3>To confirm the reservation, <br/> fill in your details:</h3>
            <label>First and last name:</label>
            <input 
                type="text" 
                name="name" 
                placeholder="ex: Adrian Clovs"
                onChange={(e) => { setName(e.target.value) }}
                required/>
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                placeholder="example@example.com" 
                onChange={(e) => { setEmail(e.target.value) }}
                required/>
            <label>Phone number:</label>
            <input 
                type="tel" 
                name="phoneNumber"
                placeholder="(xx)xxxxx-xxxx"
                pattern="\/([0-9]{2}/)([0-9]{5})-[0-9]{4}\"
                onChange={(e) => { setPhone(e.target.value) }}
                required
            />
            <label>Address:</label>
            <input 
                type="text" 
                name="address" 
                placeholder="st. example, 999/99"
                onChange={(e) => { setAddress(e.target.value) }}
                required
            />
            <label>CEP:</label>
            <input 
                type="text" 
                name="cep" 
                placeholder="xxxxx-xxx" 
                pattern="\([0-9]{5})-[0-9]{3}\"
                onChange={(e) => { setCep(e.target.value) }}
                required
            />
            <Send type="submit">All Right!</Send>

        </FormSection>
    )
};

const FormSection = styled.form `
    width: 45%;
    height: 500px;
    box-shadow: 3px 3px 4px gray;
    padding: 10px 5px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;

    & > h3 {
        margin-bottom: 10px;
        color: #874C62;
        font-size: 20px;
    }

    & > input {
        margin: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        font-weight: normal;
    }

    @media(max-width: 600px) {
        width: 95%;
        margin-bottom: 20px;
    }
`;

const Send = styled.button `
    text-align: center;
    background-color: rgba(14, 196, 14, 0.508);
    color: #fff;
    font-weight: bold;
    border-radius: 40px;
    border: none;
    height: 40px;
    width: 80%;
    margin: 15px 20px;
    padding: 0px 20%;
`;