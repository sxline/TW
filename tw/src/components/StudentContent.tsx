import React from "react";
import { Layout } from "antd";
import {StudentProps} from "./StudenOverview"

import Student from "../interface/extendsInterface"
const {  Content } = Layout;

const StudentContent = ({students}: StudentProps) => {

    return (
        <Content style={{ padding: '0 24px', display:"flex" , minHeight: 280 }}>
                <div className=" ">
                <table>
                    <tbody>
                    <tr className="Table-Header">
                        <td>
                            <h4>Numele</h4>
                        </td>
                        <td>
                            <h4>Prenumele</h4>
                        </td>
                        <td>
                            <h4>Varsta</h4>
                        </td>
                        <td>
                            <h4>Genul</h4>
                        </td>
                        <td>
                            <h4>Univer</h4>
                        </td>
                        <td>
                            <h4>Specialitate</h4>
                        </td>
                        
                    </tr>
                   
                    {students.map(item => {
                        return (
                            <StudentItem firstName = {item.firstName}
                            secondName = {item.secondName}
                            age = {item.age}
                            gender = {item.gender}
                            univerity = {item.univerity}  
                            speciality = {item.speciality}
                            >
                            </StudentItem>
                        )
                    })}
                    
                    </tbody>
                </table>
            </div>
                     
            
                    </Content>
    )
}


const StudentItem: React.FC<Student> = ({firstName, secondName, age, univerity, speciality,gender }: Student)=> {
    return<tr>
   <td>
       <h4>{firstName}</h4>
   </td>
   <td>
       <h4>{secondName}</h4>
   </td>
   <td>
       <h4>{age}</h4>
   </td>
   <td>
       <h4>{gender}</h4>
   </td>
   <td>
       <h4>{univerity}</h4>
   </td>
   <td>
       <h4>{speciality}</h4>
   </td>
</tr>
}

export default StudentContent;