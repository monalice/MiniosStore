import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export default ProductContext;

export function ProductProvider(props) {
    const [ products, setProducts ] = useState('');
    const [ minionsList, setMinionsList ] = useState([]);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ cep, setCep ] = useState('');

    useEffect( () => {
        const req = axios.get('https://j7tz26cwje.execute-api.sa-east-1.amazonaws.com/prod/products');
        req.then((response) => {
            setProducts(response.data);
        }).catch((e) => console.log(e))
    }, []);


    function selected(product) {
        const check = minionsList.find((m) => m.id === product.id);
        const index = minionsList.indexOf(product);
    
        if(check) {
            product.selected = false; 
            minionsList.splice(index, 1);
            setMinionsList([...minionsList]);
        } else {
            product.selected = true;
            setMinionsList([...minionsList, product]);
        }
    }

    function request(e) {
        e.preventDefault();
        if(minionsList.length === 0){
            return alert("Select at least one minion...")
        };
        const body = { name, email, phone, address, cep, minionsList };
        const req = axios.post('https://j7tz26cwje.execute-api.sa-east-1.amazonaws.com/prod/reservation', body);
        req.then((response) => {
            alert("Success!");
        })
        .catch((e) => {
            alert("Review your information!"); 
        });
    }
    

    return (
    <ProductContext.Provider value={{products, setProducts, selected, minionsList, request, setName, setPhone, setEmail, setAddress, setCep }}>
        {props.children}
    </ProductContext.Provider>
    );
};