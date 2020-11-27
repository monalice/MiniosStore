import React from 'react';
import Header from './Header.js';

import Apresentation from './Apresentation.js';
import MinionList from './MinionList.js';
import Products from './Products.js';
import { ProductProvider } from '../contexts/ProductContext.js';


export default function App() {
    
    return (
        <>
            <ProductProvider>
                <Header />
                <Apresentation />
                <Products />
                <MinionList />
            </ProductProvider>
        </>
    );
}


