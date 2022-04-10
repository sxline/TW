import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from "./Layouts/Card_box";

const studentsList =  [
    {
        nickname: "StoneCristiano",
        name: "Cristiano",
        surname: "Stone",
        faculty: "CIM",
        group: "CR-191",
        year: 4,
        averageGrade: 9,
        gender: "Nonbinary",
        age: 20,
        iq: 0,
        address: " ",
        phone:" "

    },
    {
        nickname: "BreadXenia",
        name: "Xenia",
        surname: "Bread",
        faculty: "CIM",
        group: "TR-191",
        year: 2,
        averageGrade: 8,
        gender: "Female",
        age: 20,
        iq: 100,
        address: " ",
        phone:" "
    },
    {
        nickname: "DeskRadu",
        name: "Radu",
        surname: "Desk",
        faculty: "CIM",
        group: "NN-191",
        year: 3,
        averageGrade: 7,
        gender: "Male",
        age: 20,
        iq: 101,
        address: " ",
        phone:" "
    }
]

function App() {
    return (
        <>
            <LayoutCustom></LayoutCustom>
            <p className='text1'> Dates about students from interface</p>
            <Card_box Students = {studentsList}/>
            <FooterNow></FooterNow>
        </>
    );
}

export default App;