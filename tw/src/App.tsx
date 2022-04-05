import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';

function App() {
    return (
        <>
            <LayoutCustom></LayoutCustom>
            <FooterNow></FooterNow>
        </>
    );
}

export default App;